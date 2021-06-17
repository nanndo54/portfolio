import React, { useState } from 'react'
import styles from '@/styles/Avatar.module.css'

import profile256 from '@img/my-photo-256.jpg'
import profile384 from '@img/my-photo-384.jpg'

function Avatar() {
  const [size, setSize] = useState(window.innerWidth < 500 ? 200 : 400)

  const handleSize = () => setSize(window.innerWidth < 500 ? 200 : 400)
  window.addEventListener('resize', handleSize)

  return (
    <div className={styles.base} style={{ width: size, height: size }}>
      <img src={size === 200 ? profile256 : profile384} />
    </div>
  )
}

export default Avatar
