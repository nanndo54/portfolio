import styles from '#/styles/Navbar.module.css'
import { useEffect } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

import useAppStore from '#/state/store'
import sections from '#/constants/sections'
import Link from '#/components/Link'
import getCurrentSection from '#/state/getCurrentSection'
import Text from '#/components/Text'
import IconButton from '#/components/IconButton'

function Navbar() {
  const { isOnTop, locale, theme, toggleLocale, toggleTheme } = useAppStore()
  const currentSection = getCurrentSection()

  useEffect(() => {
    document.querySelector('body').toggleAttribute('dark', theme === 'dark')
  }, [theme])

  return (
    <nav className={`${styles.base} ${isOnTop ? styles.isOnTop : ''}`}>
      <div className={styles.startItems}>
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
        >
          {locale}
        </IconButton>
      </div>
      <div className={styles.endItems}>
        {sections
          .filter(({ hideInNavbar }) => !hideInNavbar)
          .map(({ id }) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`${styles.link} ${id === currentSection ? styles.current : ''}`}
              noDecoration
              tabIndex={isOnTop ? -1 : 0}
            >
              <Text localeId={`${id}.title`} />
            </Link>
          ))}
      </div>
    </nav>
  )
}

export default Navbar
