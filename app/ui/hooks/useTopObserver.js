import useAppStore from '#/state/store'
import { useCallback, useEffect } from 'react'

export default function useTopObserver() {
  const { isOnTop, setOnTop } = useAppStore()

  const handleScroll = useCallback(() => {
    const newIsOnTop = window.scrollY < 40
    if (setOnTop && newIsOnTop !== isOnTop) setOnTop(newIsOnTop)
  }, [isOnTop, setOnTop])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])
}
