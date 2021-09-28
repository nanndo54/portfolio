import styles from '@/styles/Navbar.module.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import DarkModeSwitch from './DarkModeSwitch'

import { toggleTheme } from '@/actions/appActions'

function Navbar() {
  const { theme } = useSelector(({ app }) => app)
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <nav className={styles.base}>
      <div className={styles.items}>
        <DarkModeSwitch
          checked={theme === 'light'}
          onChange={changeTheme}
          moonColor='var(--font-color)'
          sunColor='var(--font-color)'
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
