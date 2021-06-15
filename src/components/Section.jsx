import React from 'react'
import styles from '../styles/Section.module.css'

function Section({ children, type = 'default' }) {
  const style = {
    default: {},
    header: { alignItems: 'center', heigth: 300 },
    skills: { alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap' },
    projects: { alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap' }
  }[type]

  return (
    <div className={styles.base} style={style}>
      {children}
    </div>
  )
}

export default Section
