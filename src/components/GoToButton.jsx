import styles from '@/styles/GoToButton.module.css'
import React from 'react'

const handleScroll = (ev, direction) => {
  const base = document.getElementById('base')
  const coords = ev.currentTarget.getBoundingClientRect()
  const top = direction === 'down' ? base.scrollTop + coords.y + 40 : 0

  base.scrollTo({
    top,
    behavior: 'smooth'
  })
}

function GoToButton({ direction = 'down', label }) {
  label = <p>{label}</p>

  return (
    <div
      className={`${styles.base} ${direction === 'down' ? styles.down : styles.up}`}
      onClick={(ev) => handleScroll(ev, direction)}
    >
      {direction === 'up' && label}
      <div className={styles.icon}>
        <div className={styles.dot1} />
        <div className={styles.dot2} />
        <div className={styles.dot3} />
      </div>
      {direction === 'down' && label}
    </div>
  )
}

export default GoToButton
