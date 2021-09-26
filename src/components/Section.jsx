import React from 'react'
import styles from '@/styles/Section.module.css'
import dotsImage from '@img/dots.png'

function Section({ children, shadow = false, last = false, onClick = () => {} }) {
  const handleNext = (ev) => {
    const coords = ev.target.getBoundingClientRect()
    const top = window.scrollY + coords.y + coords.height - 30

    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className={`${styles.base} ${shadow ? styles.shadow : ''}`} onClick={onClick}>
        {children}
      </div>
      {!last && <img className={styles.next} src={dotsImage} onClick={handleNext} />}
    </>
  )
}

export default Section
