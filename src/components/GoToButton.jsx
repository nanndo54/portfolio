import styles from '@/styles/GoToButton.module.css'
import React from 'react'

const handleScroll = (ev, direction) => {
  const base = document.getElementById('base')
  const coords = ev.target.getBoundingClientRect()
  const top = direction === 'down' ? base.scrollTop + coords.y + 15 : 0

  base.scrollTo({
    top,
    behavior: 'smooth'
  })
}

function GoToButton({ direction = 'down' }) {
  return (
    <div
      className={`${styles.base} ${direction === 'down' ? styles.down : styles.up}`}
      onClick={(ev) => handleScroll(ev, direction)}
    >
      {direction === 'up' && <p className={styles.text}>top</p>}
      <div className={styles.dot1} />
      <div className={styles.dot2} />
      <div className={styles.dot3} />
      {direction === 'down' && <p className={styles.text}>sig</p>}
    </div>
  )
}

export default GoToButton
