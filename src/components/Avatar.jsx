import React, { useState } from 'react'
import styles from '../styles/Avatar.module.css'

function Avatar() {
  const [size, setSize] = useState(window.innerWidth < 500 ? 200 : 400)

  const handleSize = () => setSize(window.innerWidth < 500 ? 200 : 400)
  window.addEventListener('resize', handleSize)

  return (
    <div className={styles.base} style={{ width: size, height: size }}>
      <img src={`../../my-photo-${size === 200 ? '256' : '384'}.jpg`} />
    </div>
  )
}

export default Avatar
