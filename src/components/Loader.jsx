import styles from '@/styles/Loader.module.css'
import React from 'react'
import { useSelector } from 'react-redux'

function Loader({}) {
  const { theme } = useSelector(({ app }) => app)

  return (
    <div className={`${styles.base} ${theme === 'dark' ? styles.dark : ''}`}>
      <div className={styles.loader} />
    </div>
  )
}

export default Loader
