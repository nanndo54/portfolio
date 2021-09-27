import { useEffect, useState } from 'react'

function useIntersectionObserver(ref, options, fallback) {
  const [intersected, setIntersected] = useState(fallback)

  const updateEntry = ([entry]) => {
    if (entry?.isIntersecting) setIntersected(true)
  }

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver
    const node = ref?.current

    if (intersected || !hasIOSupport || !node) return

    const observer = new IntersectionObserver(updateEntry, options)
    observer.observe(node)

    return () => observer.disconnect()
  }, [ref, options])

  return intersected
}

export default useIntersectionObserver
