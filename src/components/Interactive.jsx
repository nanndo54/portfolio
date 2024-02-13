'use client'

import styles from '@/styles/Interactive.module.css'

import useDebouncedCallback from '@/hooks/useDebouncedCallback'
import useInteractive from '@/hooks/useInteractive'
import useSectionObserver from '@/hooks/useSectionObserver'
import useTopObserver from '@/hooks/useTopObserver'
import useAppStore from '@/state/store'
import { useEffect, useLayoutEffect, useRef } from 'react'

const interactiveElementTypes = [
  {
    name: 'interactive-border'
  },
  {
    name: 'interactive-aura',
    clone: true
  },
  {
    name: 'interactive-text',
    clone: true,
    includeChildren: true
  }
]

const interactiveClasses = interactiveElementTypes.map((element) => element.name)

const getInteractiveElementType = (element) => {
  return interactiveElementTypes.find((className) =>
    element.classList.contains(className.name)
  )
}

export default function Interactive({ children }) {
  const { theme } = useAppStore()
  const ref = useRef()
  const layoutRef = useRef()

  useInteractive(ref, (x, y) => {
    ref.current.style.setProperty('--x', `${x}px`)
    ref.current.style.setProperty('--y', `${y}px`)
  })

  const alterSize = useDebouncedCallback(() => {
    const elements = document.querySelectorAll(
      interactiveClasses.map((className) => `.${className}`).join(',')
    )

    for (const element of elements) {
      const interactiveElement = element.interactiveElement
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
  }, [alterSize])

  useEffect(() => {
    if (!layoutRef.current) return

    const elements = document.querySelectorAll(
      interactiveClasses.map((className) => `.${className}`).join(',')
    )
    const newElements = Array.from(elements).filter(
      (element) => !element.interactiveElement
    )

    for (const element of newElements) {
      const interactiveElementType = getInteractiveElementType(element)

      const interactiveElement = interactiveElementType.clone
        ? element.cloneNode(interactiveElementType.includeChildren)
        : document.createElement('div')
      interactiveElement.classList = styles[interactiveElementType.name]

      interactiveElement.style.borderRadius =
        window.getComputedStyle(element).borderRadius
      interactiveElement.style.opacity = 0

      layoutRef.current.appendChild(interactiveElement)
      element.interactiveElement = interactiveElement
    }

    alterSize(newElements)
  }, [alterSize])

  useLayoutEffect(() => {
    document.body.setAttribute('dark', theme === 'dark')
  }, [theme])

  useTopObserver()

  useSectionObserver()

  return (
    <div ref={ref} className={styles.base}>
      {children}
      <div ref={layoutRef} aria-hidden className={styles.layout} />
    </div>
  )
}
