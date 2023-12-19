import styles from '#/styles/Navbar.module.css'
import { useEffect } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

import useAppStore from '#/state/store'

function Navbar() {
  const { locale, theme, toggleLocale, toggleTheme } = useAppStore()

  useEffect(() => {
    document.querySelector('body').toggleAttribute('dark', theme === 'dark')
  }, [theme])

  return (
    <nav className={styles.base}>
      <div className={styles.startItems}>
        <DarkModeSwitch
          checked={theme === 'dark'}
          onChange={toggleTheme}
          moonColor='var(--content-color)'
          sunColor='var(--content-color)'
          aria-hidden
        />
        <button className={styles.language} onClick={toggleLocale} aria-label={locale}>
          {locale}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
