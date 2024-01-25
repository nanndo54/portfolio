import { useEffect, useRef, useState } from 'react'

export default function useSvg(path) {
  const importedIconRef = useRef()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    import(`/static/icons/${path}`)
      .then((module) => {
        return (importedIconRef.current = module.default)
      })
      .finally(() => setLoading(false))
  }, [path])

  return { loading, SvgIcon: importedIconRef.current }
}
