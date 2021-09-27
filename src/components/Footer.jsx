import React from 'react'
import styles from '@/styles/Footer.module.css'

function Footer({}) {
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
