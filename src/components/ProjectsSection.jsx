import styles from '@/styles/ProjectsSection.module.css'
import React from 'react'

import Section from './Section'
import Project from './Project'
import projects from '@/constants/projects'

function ProjectsSection() {
  return (
    <Section>
      <h2>Proyectos</h2>
      <div className={styles.projects}>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default ProjectsSection
