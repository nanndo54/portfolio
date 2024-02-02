import useAppStore from '@/state/store'
import { useCallback, useEffect } from 'react'

export default function useTopObserver() {
  const { setOnTop } = useAppStore()

  const handleTopListener = useCallback(() => {
    const newIsOnTop = document.documentElement.scrollTop < 50
    setOnTop?.(newIsOnTop)
  }, [setOnTop])

  useEffect(() => {
    if (CSS.supports('animation-timeline', 'scroll()')) return

    handleTopListener()
    window.addEventListener('scroll', handleTopListener)

    return () => window.removeEventListener('scroll', handleTopListener)
  }, [handleTopListener])
}
