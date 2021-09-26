import React from 'react'
import styles from '@/styles/Navbar.module.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toggleTheme } from '@/actions/appActions'
import DarkModeSwitch from './DarkModeSwitch'

const goToTop = () => {
  const base = document.getElementById('base')
  base?.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function Navbar({}) {
  const { theme } = useSelector(({ app }) => app)
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className={styles.base}>
      <div className={styles.logo} onClick={goToTop}>
        pabloC54
      </div>
      <div className={styles.items}>
        <span>
          <DarkModeSwitch checked={theme === 'dark'} onChange={changeTheme} />
        </span>
        {/* <span className={styles.language}>es</span> */}
      </div>
      <div className={styles.button}>
        <a className='button' href='https://www.linkedin.com/in/pablo-cabrera-2a567b209/'>
          ¡Contáctame!
        </a>
      </div>
    </div>
  )
}

export default Navbar
