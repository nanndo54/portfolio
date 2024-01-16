import { useEffect } from 'react'

function useMouseTracker(ref, callback) {
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

  useEffect(() => {
    if (!ref.current) return

    ref.current.addEventListener('mousemove', mouseEvent)
    ref.current.addEventListener('pointermove', mouseEvent)
    ref.current.addEventListener('wheel', delayedMouseEvent, { passive: true })

    return () => {
      if (!ref.current) return

      ref.current.removeEventListener('mousemove', mouseEvent)
      ref.current.removeEventListener('pointermove', mouseEvent)
      ref.current.removeEventListener('wheel', delayedMouseEvent, {
        passive: true
      })
    }
  }, [ref])
}

export default useMouseTracker
