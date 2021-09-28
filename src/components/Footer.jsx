import styles from '@/styles/Footer.module.css'
import React from 'react'

function Footer() {
  return (
    <footer className={styles.base}>
      <div>
        <p>
          Source: <a href='https://github.com/pabloc54/portfolio'>GitHub</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
