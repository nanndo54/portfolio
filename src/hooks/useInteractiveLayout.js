'use client'

import styles from '@/styles/Interactive.module.css'

import useDebouncedCallback from '@/hooks/useDebouncedCallback'
import { useEffect } from 'react'

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

const getElements = () => {
  return document.querySelectorAll(
    interactiveElementTypes
      .map((interactiveElementType) =>
        interactiveElementType.tag
          ? interactiveElementType.tag
          : `.${interactiveElementType.className}`
      )
      .join(',')
  )
}

const getInteractiveElementType = (element) => {
  return interactiveElementTypes.find((interactiveElementType) =>
    interactiveElementType.tag
      ? element.tagName.toLowerCase() === interactiveElementType.tag
      : element.classList.contains(interactiveElementType.className)
  )
}

export default function useInteractiveLayout(layoutRef) {
  const alterSize = useDebouncedCallback(() => {
    if (!layoutRef.current) return

    const elements = getElements()

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

    layoutRef.current.style.opacity = null
    layoutRef.current.style.transition = null
  }, 500)

  useEffect(() => {
    if (!layoutRef.current) return

    const handleWindowResize = () => {
      layoutRef.current.style.opacity = 0
      layoutRef.current.style.transition = 'none'
      alterSize()
    }

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [layoutRef, alterSize])

  useEffect(() => {
    setTimeout(() => {
      if (!layoutRef.current) return

      const elements = getElements()

      const newElements = Array.from(elements).filter(
        (element) => !element.interactiveElement
      )

      if (newElements.length === 0) return

      for (const element of newElements) {
        const interactiveElementType = getInteractiveElementType(element)

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

        layoutRef.current.appendChild(interactiveElement)
        element.interactiveElement = interactiveElement
      }

      alterSize(newElements)
    }, 200)
  }, [layoutRef, alterSize])
}
