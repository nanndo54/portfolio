import React from 'react'
import styles from '@/styles/Section.module.css'

function Section({ children, type }) {
  const style = {
    header: { alignItems: 'center', flexDirection: 'column' },
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
