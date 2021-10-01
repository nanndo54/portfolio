import { useEffect, useState } from 'react'

function useIntersectionObserver(ref, options, fallback, once = true) {
  const [intersected, setIntersected] = useState(!fallback)

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
