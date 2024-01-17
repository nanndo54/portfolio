import { useEffect, useState } from 'react'

function useIntersectionObserver(ref, { once = true, ...options }) {
  const [isIntersected, setIntersected] = useState(true)

  const updateEntry = ([entry]) => {
    setIntersected(entry?.isIntersecting)
  }

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver
    const node = ref?.current

    if (!hasIOSupport || !node || (once && isIntersected)) return

    const observer = new IntersectionObserver(updateEntry, options)
    observer.observe(node)

    return () => observer.disconnect()
  }, [ref, once, options, isIntersected])

  return isIntersected
}

export default useIntersectionObserver
