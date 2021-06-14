import React from 'react'
import styles from '../styles/P.module.css'

function P({ children }) {
  return (
    <div className={styles.base}>
      <p>{children}</p>
    </div>
  )
}

export default P
