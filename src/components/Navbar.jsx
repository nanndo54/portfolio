import styles from '@/styles/Navbar.module.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import DarkModeSwitch from './DarkModeSwitch'

import { toggleTheme } from '@/actions/appActions'

const goToTop = () => {
  const base = document.getElementById('base')
  base?.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function Navbar() {
  const { theme } = useSelector(({ app }) => app)
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <nav className={styles.base}>
      <div className={styles.logo} onClick={goToTop}>
        PC54
      </div>
      <div className={styles.items}>
        <DarkModeSwitch
          checked={theme === 'ligth'}
          onChange={changeTheme}
          moonColor='var(--font-color)'
          sunColor='var(--font-color)'
        />
        <span className={styles.language}>es</span>
      </div>
      <div className={styles.button}>
        <a className='button' href='https://www.linkedin.com/in/pablo-cabrera-2a567b209/'>
          ¡Contáctame!
        </a>
      </div>
    </nav>
  )
}

export default Navbar
