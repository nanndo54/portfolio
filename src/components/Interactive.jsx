'use client'

import styles from '@/styles/Interactive.module.css'

import useInteractiveLayout from '@/hooks/useInteractiveLayout'
import useInteractivenessTracker from '@/hooks/useInteractivenessTracker'
import useSectionObserver from '@/hooks/useSectionObserver'
import useTopObserver from '@/hooks/useTopObserver'
import useAppStore from '@/state/store'
import { useLayoutEffect, useRef } from 'react'

export default function Interactive({ children }) {
  const { theme } = useAppStore()
  const layoutRef = useRef()

  useInteractivenessTracker()
  useInteractiveLayout(layoutRef.current)
  useTopObserver()
  useSectionObserver()

  useLayoutEffect(() => {
    document.body.setAttribute('dark', theme === 'dark')
  }, [theme])

  return (
    <>
      {children}
      <div id='layout' ref={layoutRef} className={styles.base} />
    </>
  )
}
