import React, { useState } from 'react'
import styles from '@/styles/Project.module.css'
// import githubIcon from '@img/github-icon.png'

function Project({ name, description, url, technologies = [], deployed = false }) {
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <div className={`${styles.base} ${expanded ? styles.expanded : ''}`}>
      <div className={`${styles.down} unselectable`} onClick={toggleExpand}>
        ↴
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{technologies.join(', ')}</p>
    </div>
  )
}

export default Project
