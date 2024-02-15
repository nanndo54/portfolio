import { debounce } from 'lib/debounce'
import { useMemo } from 'react'

const useDebouncedCallback = (callback, wait) => {
  return useMemo(() => debounce(callback, wait), [callback, wait])
}

export default useDebouncedCallback
