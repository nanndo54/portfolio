import styles from '@/styles/Project.module.css'
import React, { useState } from 'react'

function Project({ name, description, technologies = [] }) {
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
