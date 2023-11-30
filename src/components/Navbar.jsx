import styles from '#/styles/Navbar.module.css'
import { useEffect } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

import useAppStore from '#/store'

import Icon from '#/components/Icon'
import LogoIcon from '#/assets/svg/logo.svg?react'
import { handleScrollToTop } from '#/utilities/scroll'

const verifyTheme = (theme) => {
  if (theme === 'dark') document.querySelector('body').classList.add('dark')
  else document.querySelector('body').classList.remove('dark')
}

function Navbar() {
  const { locale, theme, toggleLocale, toggleTheme } = useAppStore()

  useEffect(() => {
    verifyTheme(theme)
  }, [theme])

  return (
    <nav className={styles.base}>
      <div className={styles.items}>
        <button
          type='button'
          aria-label='Logo de la página'
          className={styles.logo}
          onClick={handleScrollToTop}
        >
          <Icon src={LogoIcon} />
        </button>
        <DarkModeSwitch
          checked={theme === 'dark'}
          onChange={toggleTheme}
          moonColor='var(--content-color)'
          sunColor='var(--content-color)'
          aria-label='Cambiar tema'
        />
        <button
          className={styles.language}
          onClick={toggleLocale}
          aria-label='Cambiar lenguaje'
        >
          {locale}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
