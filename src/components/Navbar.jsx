import styles from '@/styles/Navbar.module.css'

import DarkModeSwitch from '@/components/DarkModeSwitch'

import useTheme from '@/hooks/useTheme'
import useLanguage from '@/hooks/useLanguage'

function Navbar() {
  const { isDarkTheme, changeTheme } = useTheme()
  const { locale, changeLanguage } = useLanguage()

  return (
    <nav className={styles.base}>
      <div className={styles.items}>
        <DarkModeSwitch
          checked={!isDarkTheme}
          onChange={changeTheme}
          moonColor='var(--content-color)'
          sunColor='var(--content-color)'
        />
        <button
          className={styles.language}
          onClick={changeLanguage}
          aria-label='cambiar lenguaje'
        >
          {locale}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
