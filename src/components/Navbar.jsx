import styles from '#/styles/Navbar.module.css'
import { useEffect } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

import Icon from '#/components/Icon'
import Text from '#/components/Text'

import useAppStore from '#/store'
import { handleScrollToTop } from '#/utilities/scroll'
import { LogoIcon } from '#/constants/icons'
import sections from '#/constants/sections'

const verifyTheme = (theme) => {
  if (theme === 'dark') document.querySelector('body').classList.add('dark')
  else document.querySelector('body').classList.remove('dark')
}

function Navbar() {
  const { locale, theme, toggleLocale, toggleTheme, isOnTop } = useAppStore()

  useEffect(() => {
    verifyTheme(theme)
  }, [theme])

  return (
    <nav className={styles.base}>
      <div className={styles.startItems}>
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
      <div className={`${styles.endItems} ${isOnTop ? styles.show : styles.show}`}>
        {sections.map(({ id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={styles.link}
            // tabIndex={isIntersected ? 0 : -1}
          >
            <Text localeId={`${id}.title`} />
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
