import styles from '@/styles/Navbar.module.css'
import { FormattedMessage } from 'react-intl'

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
      <a
        className='button'
        href='https://www.linkedin.com/in/pabloc54/'
        target='_blank'
        rel='noreferrer'
      >
        <FormattedMessage id='navbar.contactMe' />
      </a>
    </nav>
  )
}

export default Navbar
