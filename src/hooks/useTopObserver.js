import { useLayoutEffect } from 'react'

export default function useTopObserver() {
  useLayoutEffect(() => {
    if (CSS.supports('animation-timeline', 'scroll()')) return

    const handleTopListener = () => {
      const newIsOnTop = document.documentElement.scrollTop < 50
      document.body.setAttribute('top', newIsOnTop)
    }

    handleTopListener()
    window.addEventListener('scroll', handleTopListener)

    return () => window.removeEventListener('scroll', handleTopListener)
  }, [])
}
