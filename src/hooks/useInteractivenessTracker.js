'use client'

import { useCallback, useEffect } from 'react'

export default function useInteractivenessTracker() {
  const callback = useCallback((x, y) => {
    document.body.style.setProperty('--x', `${x}px`)
    document.body.style.setProperty('--y', `${y}px`)
  }, [])

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    const element = document.body

    if (isCoarse || !element) return

    const handleTrackInteractiveness = (e) => {
      const { x, y } = element.getBoundingClientRect()
      callback(e.clientX - x, e.clientY - y)
    }

    const delayedHandleTrackInteractiveness = (e) => {
      setTimeout(() => {
        handleTrackInteractiveness(e)
      }, 20)
    }

    element.addEventListener('mousemove', handleTrackInteractiveness)
    element.addEventListener('pointermove', handleTrackInteractiveness)
    element.addEventListener('wheel', delayedHandleTrackInteractiveness, {
      passive: true
    })

    return () => {
      if (!element) return

      element.removeEventListener('mousemove', handleTrackInteractiveness)
      element.removeEventListener('pointermove', handleTrackInteractiveness)
      element.removeEventListener('wheel', delayedHandleTrackInteractiveness, {
        passive: true
      })
    }
  }, [callback])

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches

    if (!isCoarse) return

    const handleTrackInteractiveness = () => {
      const x = window.screen.width / 2
      const y = document.documentElement.scrollTop + window.screen.height / 2

      callback(x, y)
    }

    window.addEventListener('scroll', handleTrackInteractiveness)

    return () => {
      if (!window) return

      window.removeEventListener('scroll', handleTrackInteractiveness)
    }
  }, [callback])
}
