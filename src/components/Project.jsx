import React from 'react'
import styles from '@/styles/Project.module.css'
import githubIcon from '@img/github-icon.png'

function Project({ name, description, url, technologies = [], deployed = false }) {
  const handleURL = () => (window.location.href = url)

  return (
    <div className={styles.base} onClick={handleURL}>
      <div className={styles.icon}>
        <img src={githubIcon} />
      </div>
      <div className={styles.body}>
        <div className={styles.title}>
          <h4>{name}</h4>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.technologies}>
          <p className='highlight'>{technologies.join(', ')}</p>
        </div>
        {/*{deployed && (
          <div className={styles.deployed}>
            <p>{'Disponible en: ' + deployed}</p>
          </div>
        )}*/}
      </div>
    </div>
  )
}

export default Project
