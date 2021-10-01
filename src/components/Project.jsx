import styles from '@/styles/Project.module.css'
import { expandProject } from '@/actions/appActions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSkill } from '@/constants/skills'
import Skill from './Skill'

function Project({ name, description, url = '', technologies = [], images = [] }) {
  const { activeProject } = useSelector(({ app }) => app)
  const dispatch = useDispatch()

  const expanded = name === activeProject

  const toggleExpand = () => {
    const projectName = !expanded ? name : ''
    dispatch(expandProject(projectName))
  }

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
        <div className={styles.images}>
          {images
            .slice(0)
            .reverse()
            .map((image, i) => (
              <img key={i} src={image} alt={`${name} preview no.${i}`} />
            ))}
        </div>
      </div>
      <div className={styles.tags}>
        {technologies.map((name) => (
          <Skill {...getSkill(name)} size='small' key={name} />
        ))}
      </div>
    </article>
  )
}

export default Project
