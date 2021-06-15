import React from 'react'
import styles from '../styles/Skill.module.css'
import Title from './Title'

function Skill({ name = 'NoName', color = '#666666', image = '../../default-technology-icon.png' }) {
  return (
    <div className={styles.base} style={{ backgroundColor: color }}>
      <div className={styles.icon} style={{ backgroundImage: `url("${image}")` }} />
      <div className={styles.title}>
        <Title level={4}>{name}</Title>
      </div>
    </div>
  )
}

export default Skill
