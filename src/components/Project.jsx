import React from 'react'
import styles from '@/styles/Project.module.css'
import Paragraph from './Paragraph'
import Title from './Title'

import github_icon from '@img/github-icon.png'

function Project({ name, description, url, technologies = [], deployed = false }) {
  const handleURL = () => (window.location.href = url)

  return (
    <div className={styles.base} onClick={handleURL}>
      <div className={styles.icon} style={{ backgroundImage: `url("${github_icon}")` }} />
      <div className={styles.body}>
        <div className={styles.title}>
          <Title level={3}>{name}</Title>
        </div>
        <div className={styles.description}>
          <Paragraph>{description}</Paragraph>
        </div>
        <div className={styles.technologies}>
          <Paragraph highlight>{technologies.join(', ')}</Paragraph>
        </div>
        {/*{deployed && (
          <div className={styles.deployed}>
            <Paragraph>{'Disponible en: ' + deployed}</Paragraph>
          </div>
        )}*/}
      </div>
    </div>
  )
}

export default Project
