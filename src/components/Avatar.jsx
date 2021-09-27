import React from 'react'
import styles from '@/styles/Avatar.module.css'

import photo from '@img/profile-photo.jpg'

function Avatar() {
  return <img className={styles.base} src={photo} alt='my photo' />
}

export default Avatar
