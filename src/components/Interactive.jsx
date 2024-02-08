'use client'

import styles from '@/styles/Interactive.module.css'

import useMouseTracker from '@/hooks/useMouseTracker'
import useSectionObserver from '@/hooks/useSectionObserver'
import useTopObserver from '@/hooks/useTopObserver'
import useAppStore from '@/state/store'
import { useEffect, useRef } from 'react'

export default function Interactive({ children }) {
  const { theme } = useAppStore()
  const ref = useRef()
  const layoutRef = useRef()

  useMouseTracker(ref, (x, y) => {
    document.body.style.setProperty('--x', `${x}px`)
    document.body.style.setProperty('--y', `${y}px`)
  })

  // useEffect(() => {
  // const elements = document.querySelectorAll('article')

  // const test = () => {
  //   const layoutElement = layoutRef.current
  //   layoutElement.innerHTML = ''

  //   for (const element of elements) {
  //     const el = element.cloneNode()
  //     el.classList = styles.shadow
  //     el.style.width = `${element.offsetWidth}px`
  //     el.style.height = `${element.offsetHeight}px`
  //     el.style.top = `${element.offsetTop}px`
  //     el.style.left = `${element.offsetLeft}px`
  //     el.style.borderRadius = `${window.getComputedStyle(element).borderRadius}`
  //     layoutElement.appendChild(el)
  //   }
  // }

  // test()

  // window.addEventListener('resize', test)

  // return () => {
  //   window.removeEventListener('resize', test)
  // }
  // }, [])

  useEffect(() => {
    document.body.setAttribute('dark', theme === 'dark')
  }, [theme])

  useTopObserver()

  useSectionObserver()

  return (
    <>
      <div ref={layoutRef} className={styles.layout} />
      <div ref={ref} className={styles.base}>
        {children}
      </div>
    </>
  )
}
