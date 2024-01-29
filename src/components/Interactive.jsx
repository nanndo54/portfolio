'use client'

import styles from '@/styles/Interactive.module.css'

import useMouseTracker from '@/hooks/useMouseTracker'
import useSectionObserver from '@/hooks/useSectionObserver'
import useTopObserver from '@/hooks/useTopObserver'
import { useRef } from 'react'

export default function Interactive({ children }) {
  const ref = useRef()

  useMouseTracker(ref, (x, y) => {
    ref.current.style.setProperty('--x', x)
    ref.current.style.setProperty('--y', y)
  })

  useTopObserver()

  useSectionObserver()

  return (
    <div ref={ref} className={styles.base}>
      {children}
    </div>
  )
}
