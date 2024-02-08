'use client'

import useAppStore from '@/state/store'
import useDictionary from 'i18n/client'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function ThemeButton() {
  const { theme, toggleTheme } = useAppStore()
  const { aria } = useDictionary()

  return (
    <DarkModeSwitch
      className='scale-animation'
      checked={theme === 'dark'}
      onChange={toggleTheme}
      moonColor='var(--foreground-color)'
      sunColor='var(--foreground-color)'
      title={theme === 'dark' ? aria.setLightMode : aria.setDarkMode}
    />
  )
}
