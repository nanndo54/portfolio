'use client'

import styles from '@/styles/Interactive.module.css'

import { debounce } from 'lib/debounce'
import { useCallback, useEffect, useState } from 'react'

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

    const viewportOffset = element.getBoundingClientRect()
    interactiveElement.style.top = `${document.documentElement.scrollTop + viewportOffset.top}px`
    interactiveElement.style.left = `${viewportOffset.left}px`

    interactiveElement.style.opacity = null
  }

  if (callback) callback()
}, 500)

export default function useInteractiveLayout(layoutRef) {
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
      console.log('🚀 | newElements:', newElements)

      if (newElements.length === 0) return

      for (const element of newElements) {
        const interactiveElementType = getInteractiveElementType(element)
        console.log('🚀 | interactiveElementType:', interactiveElementType)

        const interactiveElement = interactiveElementType.clone
          ? element.cloneNode(interactiveElementType.includeChildren)
          : document.createElement('div')

        if (interactiveElementType.className) {
          interactiveElement.classList.remove(interactiveElementType.className)
          interactiveElement.classList.add(styles[interactiveElementType.className])
        }

        const borderRadius = window.getComputedStyle(element).borderRadius
        if (borderRadius !== '0px') interactiveElement.style.borderRadius = borderRadius

        interactiveElement.style.opacity = 0
        if (interactiveElementType.clone)
          interactiveElement.setAttribute('aria-hidden', 'true')

        layoutRef.current.appendChild(interactiveElement)
        element.interactiveElement = interactiveElement
      }

      refreshLayoutElements({ elements: newElements })
    }, 200)
  }, [layoutRef, elements, refreshLayoutElements])
}
