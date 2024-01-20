'use client'

import IconButton from '#/components/IconButton'
import useAppStore from '#/state/store'
import styles from '#/styles/NavbarButtons.module.css'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function NavbarButtons() {
  const { locale, theme, toggleLocale, toggleTheme } = useAppStore()

  return (
    <div className={styles.base}>
      <DarkModeSwitch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        moonColor='var(--content-color)'
        sunColor='var(--content-color)'
        aria-hidden
      />
      <IconButton
        className={styles.language}
        onClick={toggleLocale}
        aria-label={locale}
        noBorder
      >
        {locale}
      </IconButton>
    </div>
  )
}
