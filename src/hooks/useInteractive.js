'use client'

import { useEffect } from 'react'

export default function useInteractive(ref, callback) {
  useEffect(() => {
    const element = ref.current
    if (window.matchMedia('(pointer: coarse)').matches || !element) return

    const mouseEvent = (e) => {
      if (!ref?.current) return

      const { x, y } = ref.current.getBoundingClientRect()
      callback(e.clientX - x, e.clientY - y)
    }

    const delayedMouseEvent = (e) => {
      setTimeout(() => {
        mouseEvent(e)
      }, 20)
    }

    element.addEventListener('mousemove', mouseEvent)
    element.addEventListener('pointermove', mouseEvent)
    element.addEventListener('wheel', delayedMouseEvent, { passive: true })

    return () => {
      if (!element) return

      element.removeEventListener('mousemove', mouseEvent)
      element.removeEventListener('pointermove', mouseEvent)
      element.removeEventListener('wheel', delayedMouseEvent, {
        passive: true
      })
    }
  }, [ref, callback])

  useEffect(() => {
    if (!window.matchMedia('(pointer: coarse)').matches) return

    const scrollEvent = () => {
      if (!ref?.current) return

      const x = window.screen.width / 2
      const y = document.documentElement.scrollTop + window.screen.height / 2

      callback(x, y)
    }

    window.addEventListener('scroll', scrollEvent)

    return () => {
      if (!window) return

      window.removeEventListener('scroll', scrollEvent)
    }
  }, [ref, callback])
}
