import styles from '@/styles/Avatar.module.css'
import React from 'react'

import photo from '@img/profile-photo.jpg'

function Avatar() {
  return (
    <header id='profile' className={styles.base}>
      <img src={photo} alt='me' loading='eager' />
    </header>
  )
}

export default Avatar
