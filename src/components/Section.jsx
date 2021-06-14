import React from 'react'
import styles from '../styles/Section.module.css'

function Section({ children, type = 'default', wrap = false }) {
  const style = {
    default: {},
    header: { alignItems: 'center' },
    skills: { alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap' }
  }[type]

  return (
    <div className={styles.base} style={style}>
      {children}
    </div>
  )
}

export default Section
