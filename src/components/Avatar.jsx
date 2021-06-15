import React, { useState } from 'react'
import styles from '../styles/Avatar.module.css'

function Avatar() {
  //const [avatarSize, setAvatarSize] = useState(60)

  return (
    <div className={styles.base} style={{ width: 200, height: 200 }}>
      <img src='../../my-photo-384.jpg' />
    </div>
  )
}

export default Avatar
