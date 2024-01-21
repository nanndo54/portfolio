import useAppStore from '#/state/store'
import { useCallback, useEffect } from 'react'

export default function useTopObserver() {
  const { isOnTop, setOnTop } = useAppStore()

  const handleWindowTop = useCallback(() => {
    const newIsOnTop = window.scrollY < 40
    if (setOnTop && newIsOnTop !== isOnTop) setOnTop(newIsOnTop)
  }, [isOnTop, setOnTop])

  useEffect(() => {
    handleWindowTop()
    window.addEventListener('scroll', handleWindowTop)

    return () => {
      window.removeEventListener('scroll', handleWindowTop)
    }
  }, [handleWindowTop])
}
