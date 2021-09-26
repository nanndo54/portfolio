import React from 'react'
import styles from '@/styles/Section.module.css'
import dotsImage from '@img/dots.png'

const scrollNext = (ev) => {
  const base = document.getElementById('base')
  const coords = ev.target.getBoundingClientRect()
  const top = base.scrollTop + coords.y

  base.scrollTo({
    top,
    behavior: 'smooth'
  })
}

function Section({ children, shadow = false, last = false, onClick = () => {} }) {
  return (
    <>
      <div className={`${styles.base} ${shadow ? styles.shadow : ''}`} onClick={onClick}>
        {children}
      </div>
      {!last && <img className={styles.next} src={dotsImage} onClick={scrollNext} />}
    </>
  )
}

export default Section
