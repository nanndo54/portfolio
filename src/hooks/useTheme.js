import { useLayoutEffect } from 'react'

const verifyTheme = (mode) => {
  if (mode === 'dark') document.querySelector('body').classList.add('dark')
  else document.querySelector('body').classList.remove('dark')
}

function useTheme(mode) {
  useLayoutEffect(() => {
    verifyTheme(mode)
  }, [mode])
}

export default useTheme

export { verifyTheme }
