import styles from '@/styles/Project.module.css'
import React from 'react'

import Skill from './Skill'

import useProject from '@/hooks/useProject'

function Project({ name, description, url = '', technologies = [], images = [] }) {
  const { expanded, toggleExpand, skills } = useProject(name, technologies)
  const [preview1, preview2] = images

  return (
    <article className={`${styles.base} ${expanded ? styles.expanded : ''}`}>
      <div className={styles.header}>
        <h3>
          <a target='_blank' rel='noreferrer' href={url}>
            {name}
          </a>
        </h3>
        <button className={styles.down} onClick={toggleExpand}>
          ❯
        </button>
      </div>
      <div className={styles.content}>
        <p>{description}</p>
        <div className={styles.images} title='vista previa'>
          <img src={preview1} alt={`${name} preview 1`} />
          <img src={preview2} alt={`${name} preview 2`} />
        </div>
      </div>
      <div className={styles.tags}>
        {skills.map((skill, i) => (
          <Skill key={i} {...skill} size='small' />
        ))}
      </div>
    </article>
  )
}

export default Project
