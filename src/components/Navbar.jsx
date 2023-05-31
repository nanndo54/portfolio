import styles from '#styles/Navbar.module.css'

import { DarkModeSwitch } from 'react-toggle-dark-mode'

import useTheme from '#hooks/useTheme'
import useAppStore from '#/store'

function Navbar() {
  const { isDarkTheme, changeTheme } = useTheme()
  const { locale, toggleLocale } = useAppStore()

  return (
    <nav className={styles.base}>
      <div className={styles.items}>
        <DarkModeSwitch
          checked={isDarkTheme}
          onChange={changeTheme}
          moonColor='var(--content-color)'
          sunColor='var(--content-color)'
        />
        <button
          className={styles.language}
          onClick={toggleLocale}
          aria-label='cambiar lenguaje'
        >
          {locale}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
