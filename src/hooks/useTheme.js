import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleTheme } from '@/actions/appActions'

const verifyTheme = (theme) => {
  if (theme === 'dark') document.querySelector('body').classList.add('dark')
  else document.querySelector('body').classList.remove('dark')
}

function useTheme() {
  const { theme } = useSelector(({ app }) => app)
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch(toggleTheme())
  }

  useLayoutEffect(() => {
    console.log('cambio')
    verifyTheme(theme)
  }, [theme])

  return { isDarkTheme: theme === 'dark', changeTheme }
}

export default useTheme
