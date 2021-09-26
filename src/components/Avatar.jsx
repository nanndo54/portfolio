import React, { useState } from 'react'
import styles from '@/styles/Avatar.module.css'

import photo from '@img/profile-photo.jpg'

function Avatar() {
  return (
    <div className={styles.base}>
      <img src={photo} />
    </div>
  )
}

export default Avatar
