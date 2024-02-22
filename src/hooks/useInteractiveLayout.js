'use client'

import { debounce } from 'lib/debounce'
import { useCallback, useEffect, useRef, useState } from 'react'

const interactiveElementTypes = [
  {
    tag: 'strong',
    clone: true,
    includeChildren: true
  },
  {
    className: 'interactive-border'
  },
  {
    className: 'interactive-border-active'
  },
  {
    className: 'interactive-aura',
    clone: true
  },
  {
    className: 'interactive-text',
    clone: true,
    includeChildren: true
  },
  // {
  //   className: 'interactive-button-primary'
  // },
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

    if (interactiveElement.parentElement.tagName.toLowerCase() === 'area') {
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
}, 500)

const handleElementsMutation = (mutations) => {
  for (const mutation of mutations) {
    const active = mutation.target.getAttribute('active') === 'true'

    if (active)
      alterSize({
        elements: [mutation.target],
        callback: () => {
          mutation.target.interactiveElement.setAttribute('active', active)
        }
      })
    else {
      mutation.target.interactiveElement.style.transition = 'none'
      mutation.target.interactiveElement.removeAttribute('active')
      mutation.target.interactiveElement.style.transition = null
    }
  }
}

export default function useInteractiveLayout(layoutRef) {
  const mutationObserverRef = useRef(null)

  const refreshLayoutElements = useCallback(
    ({ elements }) => {
      layoutRef.current.style.opacity = 0
      layoutRef.current.style.transition = 'none'
      alterSize({
        elements,
        callback: () => {
          layoutRef.current.style.opacity = null
          layoutRef.current.style.transition = null
        }
      })
    },
    [layoutRef]
  )

  const [windowWidth, setWindowWidth] = useState()

  const handleWindowResize = useCallback(() => {
    setWindowWidth(window.innerWidth)

    if (window.innerWidth === windowWidth) return
    refreshLayoutElements({})
  }, [windowWidth, refreshLayoutElements])

  useEffect(() => {
    mutationObserverRef.current = new MutationObserver(handleElementsMutation)

    return () => mutationObserverRef.current.disconnect()
  }, [])

  useEffect(() => {
    if (!layoutRef.current) return

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [layoutRef, handleWindowResize])

  const elements = getElements()

  useEffect(() => {
    setTimeout(() => {
      if (!layoutRef.current) return

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
          )?.interactiveElement ?? layoutRef.current
        parent.appendChild(interactiveElement)

        if (interactiveElement.className?.endsWith('active'))
          mutationObserverRef.current.observe(element, {
            attributeFilter: ['active']
          })
      }

      refreshLayoutElements({ elements: newElements })
    }, 200)
  }, [layoutRef, elements, refreshLayoutElements])
}
