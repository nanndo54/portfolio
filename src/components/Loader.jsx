import styles from '@/styles/Loader.module.css'
import React from 'react'
import { useSelector } from 'react-redux'

function Loader() {
  const { theme } = useSelector(({ app }) => app)
  const isDarkTheme = theme === 'dark'

  return (
    <div className={`${styles.base} ${isDarkTheme ? styles.dark : ''}`}>
      <div className={styles.loader} />
    </div>
  )
}

export default Loader
