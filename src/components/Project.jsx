import styles from '@/styles/Project.module.css'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Skill from '@/components/Skill'

import useProject from '@/hooks/useProject'

function Project({ name, url = '', technologies = [], images = [] }) {
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
        <p>
          <FormattedMessage id={`project.${name.toLowerCase()}`} />{' '}
        </p>
        <div className={styles.images}>
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
