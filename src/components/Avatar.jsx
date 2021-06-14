import React, { useState } from 'react'
import styles from '../styles/Avatar.module.css'

function Avatar() {
  //const [avatarSize, setAvatarSize] = useState(60)

  return (
    <div className={styles.base} style={{ width: 100, height: 100 }}>
      <img className={styles.pic} src='../../profile-lg.jpg' />
    </div>
  )
}

export default Avatar
