import React from 'react'
import styles from '../styles/Skill.module.css'
import P from './P'
import Title from './Title'

function Skill({ name }) {
  return (
    <div className={styles.base}>
      {/*<Logo name='name' />*/}
      <Title level={4}>{name}</Title>
    </div>
  )
}

export default Skill
