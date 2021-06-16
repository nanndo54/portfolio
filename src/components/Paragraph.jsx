import React from 'react'
import styles from '../styles/Paragraph.module.css'

function Paragraph({ center = false, highlight = false, children }) {
  const style = {
    textAlign: center ? 'center' : 'unset',
    weight: highlight ? '600' : '500',
    color: highlight ? '#ffbbee' : '#eeeeee'
  }

  return (
    <div className={styles.base} style={style}>
      <p>{children}</p>
    </div>
  )
}

export default Paragraph
