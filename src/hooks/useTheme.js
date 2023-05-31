import { useLayoutEffect } from 'react'

import useAppStore from '#/store'

const verifyTheme = (theme) => {
  if (theme === 'dark') document.querySelector('body').classList.add('dark')
  else document.querySelector('body').classList.remove('dark')
}

function useTheme() {
  const { theme, toggleTheme } = useAppStore()

  const changeTheme = () => {
    toggleTheme()
  }

  useLayoutEffect(() => {
    verifyTheme(theme)
  }, [theme])

  return { isDarkTheme: theme === 'dark', changeTheme }
}

export default useTheme
