'use client'

import { debounce } from 'lib/debounce'
import { useCallback, useEffect, useState } from 'react'

const interactiveElementTypes = [
  {
    className: 'interactive-aura',
    clone: true
  },
  {
    tag: 'strong',
    clone: true,
    includeChildren: true
  },
  {
    className: 'interactive-border'
  },
  {
    className: 'interactive-text',
    clone: true,
    includeChildren: true
  },
  {
    className: 'interactive-button-secondary',
    clone: true,
    includeChildren: true
  }
]

const getElements = () =>
  typeof window === 'undefined'
    ? []
    : document.querySelectorAll(
        interactiveElementTypes
          .map(
            (interactiveElementType) =>
              `main ${
                interactiveElementType.tag
                  ? interactiveElementType.tag
                  : `.${interactiveElementType.className}`
              }`
          )
          .join(',')
      )

const getInteractiveElementType = (element) => {
  return interactiveElementTypes.find((interactiveElementType) =>
    interactiveElementType.tag
      ? element.tagName.toLowerCase() === interactiveElementType.tag
      : element.classList.contains(interactiveElementType.className)
  )
}

const alterSize = debounce(({ elements, callback }) => {
  elements ??= getElements()

  for (const element of elements) {
    const interactiveElement = element.interactiveElement
    if (!interactiveElement) continue

    interactiveElement.style.width = `${element.offsetWidth}px`
    interactiveElement.style.height = `${element.offsetHeight}px`

    if (interactiveElement.parentElement.id === 'layout') {
      const viewportOffset = element.getBoundingClientRect()
      interactiveElement.style.top = `${document.documentElement.scrollTop + viewportOffset.top}px`
      interactiveElement.style.left = `${viewportOffset.left}px`
    } else {
      interactiveElement.style.top = `${element.offsetTop}px`
      interactiveElement.style.left = `${element.offsetLeft}px`
    }

    interactiveElement.style.opacity = null
  }

  if (callback) callback()
}, 300)

export default function useInteractiveLayout(layoutElement) {
  const refreshLayoutElements = useCallback(
    ({ elements }) => {
      layoutElement.style.opacity = 0
      layoutElement.style.transition = 'none'
      alterSize({
        elements,
        callback: () => {
          layoutElement.style.opacity = null
          layoutElement.style.transition = null
        }
      })
    },
    [layoutElement]
  )

  const [windowWidth, setWindowWidth] = useState()

  const handleWindowResize = useCallback(
    (event) => {
      const newWindowWidth = event.target.innerWidth
      setWindowWidth(newWindowWidth)

      const testElement = document.querySelector(
        `main .${interactiveElementTypes[0].className}`
      )

      if (testElement != null) {
        const viewportOffset = testElement.getBoundingClientRect()
        const offsetTop = document.documentElement.scrollTop + viewportOffset.top
        const isSameHeight =
          Math.abs(
            Number(testElement.interactiveElement.style.top.slice(0, -2)) - offsetTop
          ) < 1

        if (newWindowWidth === windowWidth && isSameHeight) return
      }

      refreshLayoutElements({})
    },
    [windowWidth, refreshLayoutElements]
  )

  useEffect(() => {
    if (!layoutElement) return

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [layoutElement, handleWindowResize])

  const elements = getElements()

  useEffect(() => {
    setTimeout(() => {
      if (!layoutElement) return

      const newElements = Array.from(elements).filter(
        (element) => !element.interactiveElement
      )

      if (newElements.length === 0) return

      for (const element of newElements) {
        const interactiveElementType = getInteractiveElementType(element)

        const interactiveElement = interactiveElementType.clone
          ? element.cloneNode(interactiveElementType.includeChildren)
          : document.createElement('div')

        if (interactiveElementType.clone)
          interactiveElement.setAttribute('aria-hidden', 'true')
        else interactiveElement.classList.add(...element.classList)

        interactiveElement.style.opacity = 0

        element.interactiveElement = interactiveElement

        const parent =
          newElements.find(
            (newElement) => newElement.contains(element) && newElement !== element
          )?.interactiveElement ?? layoutElement
        parent.appendChild(interactiveElement)
      }

      refreshLayoutElements({ elements: newElements })
    }, 200)
  }, [layoutElement, elements, refreshLayoutElements])
}
