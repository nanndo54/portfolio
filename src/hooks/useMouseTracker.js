import { useEffect } from 'react'

export default function useMouseTracker(ref, callback) {
  useEffect(() => {
    const element = ref.current
    if (!element) return

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
}
