'use client'

import styles from '@/styles/Interactive.module.css'

import useMouseTracker from '@/hooks/useMouseTracker'
import useSectionObserver from '@/hooks/useSectionObserver'
import useTopObserver from '@/hooks/useTopObserver'
import useAppStore from '@/state/store'
import { useEffect, useRef } from 'react'

export default function Interactive({ dictionary, children }) {
  const { theme, isOnTop, setDictionary, toggleTheme } = useAppStore()
  const ref = useRef()

  useMouseTracker(ref, (x, y) => {
    ref.current.style.setProperty('--x', x)
    ref.current.style.setProperty('--y', y)
  })

  useEffect(() => {
    if (setDictionary) setDictionary(dictionary)
  }, [dictionary, setDictionary])

  useEffect(() => {
    document.body.setAttribute('dark', theme === 'dark')
  }, [theme, toggleTheme])

  useEffect(() => {
    document.body.setAttribute('top', isOnTop)
  }, [isOnTop])

  useTopObserver()

  useSectionObserver()

  return (
    <div ref={ref} className={styles.base}>
      {children}
    </div>
  )
}
