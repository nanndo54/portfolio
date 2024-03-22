'use client'

import { debounce } from 'lib/debounce'
import { useCallback, useEffect } from 'react'

export default function useInteractivenessTracker() {
  const callback = useCallback((x, y) => {
    if (x != null) document.body.style.setProperty('--x', `${x}px`)
    if (y != null) document.body.style.setProperty('--y', `${y}px`)
  }, [])

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    const element = document.body

    if (isCoarse || !element) return

    const handleTrackInteractiveness = (e) => {
      const { x, y } = element.getBoundingClientRect()
      callback(e.clientX - x, e.clientY - y)
    }

    const debouncedHandleTrackInteractiveness = debounce((e) => {
      handleTrackInteractiveness(e)
    }, 100)

    element.addEventListener('mousemove', handleTrackInteractiveness)
    element.addEventListener('pointermove', handleTrackInteractiveness)
    element.addEventListener('wheel', debouncedHandleTrackInteractiveness, {
      passive: true
    })

    return () => {
      if (!element) return

      element.removeEventListener('mousemove', handleTrackInteractiveness)
      element.removeEventListener('pointermove', handleTrackInteractiveness)
      element.removeEventListener('wheel', debouncedHandleTrackInteractiveness, {
        passive: true
      })
    }
  }, [callback])

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches

    if (!isCoarse) return

    const handleTrackInteractiveness = () => {
      const y = document.documentElement.scrollTop + window.screen.height / 2

      callback(null, y)
    }

    handleTrackInteractiveness()

    window.addEventListener('scroll', handleTrackInteractiveness)

    return () => {
      window.removeEventListener('scroll', handleTrackInteractiveness)
    }
  }, [callback])
}
