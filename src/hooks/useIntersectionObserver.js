import { useEffect, useState } from 'react'

function useIntersectionObserver(ref, { once = true, ...options }) {
  const [intersected, setIntersected] = useState(true)

  const updateEntry = ([entry]) => {
    setIntersected(entry?.isIntersecting)
  }

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver
    const node = ref?.current

    if (!hasIOSupport || !node || (once && intersected)) return

    const observer = new IntersectionObserver(updateEntry, options)
    observer.observe(node)

    return () => observer.disconnect()
  }, [ref, options])

  return intersected
}

export default useIntersectionObserver
