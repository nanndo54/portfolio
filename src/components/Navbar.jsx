import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'
import styles from '../styles/Navbar.module.css'

function Navbar({}) {
  const { language, setLanguage } = useContext(LanguageContext)

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <div className={styles.base}>
      <div className={styles.logo} onClick={goToTop}>
        portfolio
      </div>
      <div className={styles.language} onClick={handleLanguage}>
        {language}
      </div>
    </div>
  )
}

export default Navbar
