import React from 'react'
import styles from '../styles/Project.module.css'
import P from './P'
import Title from './Title'

function Project({ name = 'NoName', description = 'NoDescription', url = '', technologies = [], deployed = false }) {
  return (
    <div className={styles.base}>
      <div className={styles.icon} style={{ backgroundImage: `url("../../github-icon.png")` }} />
      <div className={styles.body}>
        <div className={styles.title}>
          <a href={url}>
            <Title level={3}>{name}</Title>
          </a>
        </div>
        <div className={styles.description}>
          <P>{description}</P>
        </div>
        <div className={styles.technologies}>
          <P>{technologies.join(', ')}</P>
        </div>
        {deployed && (
          <div className={styles.deployed}>
            <P>{'Disponible en: ' + deployed}</P>
          </div>
        )}
      </div>
    </div>
  )
}

export default Project
