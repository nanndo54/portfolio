'use client'

import Hint from '@/components/Hint'
import useAppStore from '@/state/store'
import useDictionary from 'i18n/client'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function ThemeButton() {
  const { theme, toggleTheme } = useAppStore()
  const { aria } = useDictionary()

  return (
    <Hint position='bottom-left' label={aria.toggleTheme} hideOnClick>
      <DarkModeSwitch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        moonColor='var(--foreground-color)'
        sunColor='var(--foreground-color)'
        title={aria.toggleTheme}
      />
    </Hint>
  )
}
