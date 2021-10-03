import styles from '@/styles/Navbar.module.css'
import React from 'react'

import DarkModeSwitch from './DarkModeSwitch'

import useTheme from '@/hooks/useTheme'

function Navbar() {
  const { isDarkTheme, changeTheme } = useTheme()

  return (
    <nav className={styles.base}>
      <div className={styles.items}>
        <DarkModeSwitch
          checked={!isDarkTheme}
          onChange={changeTheme}
          moonColor='var(--content-color)'
          sunColor='var(--content-color)'
        />
        <span className={styles.language}>es</span>
      </div>
      <a className='button' href='https://www.linkedin.com/in/pablo-cabrera-2a567b209/'>
        ¡Contáctame!
      </a>
    </nav>
  )
}

export default Navbar
