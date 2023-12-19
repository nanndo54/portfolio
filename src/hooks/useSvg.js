import { useEffect, useRef, useState } from 'react'

export function useSvg(path) {
  const importedIconRef = useRef()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    import(/* @vite-ignore */ path)
      .then((module) => (importedIconRef.current = module.ReactComponent))
      .finally(() => setLoading(false))
  }, [path])

  return { loading, SvgIcon: importedIconRef.current }
}

export default useSvg
