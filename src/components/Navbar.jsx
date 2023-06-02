import styles from '#/styles/Navbar.module.css'

import { DarkModeSwitch } from 'react-toggle-dark-mode'

import useTheme from '#/hooks/useTheme'
import useAppStore from '#/store'

import logo from '#/assets/svg/logo.svg'
import { handleScrollToTop } from '#/utilities/scroll'

function Navbar() {
  const { isDarkTheme, changeTheme } = useTheme()
  const { locale, toggleLocale } = useAppStore()

  return (
    <nav className={styles.base}>
      <div className={styles.items}>
        <button className={styles.logo} onClick={handleScrollToTop}>
          <img src={logo} alt='Logotipo' />
        </button>
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
