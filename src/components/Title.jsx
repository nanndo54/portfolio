import React from 'react'
import styles from '../styles/Title.module.css'

function Title({ level = 2, center = false, children }) {
  return (
    <div className={styles.base} style={{ textAlign: center ? 'center' : 'unset' }}>
      {
        {
          1: <h1>{children}</h1>,
          2: <h2>{children}</h2>,
          3: <h3>{children}</h3>,
          4: <h4>{children}</h4>,
          5: <h5>{children}</h5>,
          6: <h6>{children}</h6>
        }[level]
      }
    </div>
  )
}

export default Title
