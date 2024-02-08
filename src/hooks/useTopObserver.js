import { useCallback, useLayoutEffect } from 'react'

export default function useTopObserver() {
  const handleTopListener = useCallback(() => {
    const newIsOnTop = document.documentElement.scrollTop < 50
    document.body.setAttribute('top', newIsOnTop)
  }, [])

  useLayoutEffect(() => {
    if (CSS.supports('animation-timeline', 'scroll()')) return

    handleTopListener()
    window.addEventListener('scroll', handleTopListener)

    return () => window.removeEventListener('scroll', handleTopListener)
  }, [handleTopListener])
}
