import { useEffect, useRef, useState } from 'react'

export function useSvg(path) {
  const importedIconRef = useRef()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    import(`/app/ui/assets/icons/${path}`)
      .then((module) => {
        return (importedIconRef.current = module.default)
      })
      .finally(() => setLoading(false))
  }, [path])

  return { loading, SvgIcon: importedIconRef.current }
}

export default useSvg