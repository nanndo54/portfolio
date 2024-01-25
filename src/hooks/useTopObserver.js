import useAppStore from '@/state/store'
import { useCallback, useEffect } from 'react'

export default function useTopObserver() {
  const { isOnTop, setOnTop } = useAppStore()

  const handleTopListener = useCallback(
    (ev) => {
      const newIsOnTop = ev.target.scrollTop < 20
      if (setOnTop && newIsOnTop !== isOnTop) setOnTop(newIsOnTop)
    },
    [isOnTop, setOnTop]
  )

  useEffect(() => {
    const element = document.querySelector('main')
    element.addEventListener('scroll', handleTopListener)

    return () => element.removeEventListener('scroll', handleTopListener)
  }, [handleTopListener])

  useEffect(() => {
    const element = document.querySelector('main')
    element.addEventListener('scroll', handleTopListener)

    return () => element.removeEventListener('scroll', handleTopListener)
  }, [handleTopListener])
}
