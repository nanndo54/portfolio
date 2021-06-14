import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import styles from '../styles/BackToTop.module.css'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  const handleVisible = () => {
    const position = document.documentElement.scrollTop

    setVisible(position > 200)
  }

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', handleVisible)

  return (
    <div className={styles.base} onClick={goToTop} style={{ display: visible ? 'inline' : 'none' }}>
      <FaArrowCircleUp />
    </div>
  )
}

export default BackToTop
