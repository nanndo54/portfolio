import styles from '@/styles/ProjectsSection.module.css'
import React from 'react'

import Section from './Section'
import Project from './Project'

// import projects from '@/constants/projects'

function ProjectsSection() {
  const description =
    'este es un proyecto complicado este es un proyecto complicado este es un proyecto  sdksjdksjdto complicadoeste es un proyecto complicado'

  return (
    <Section>
      <h2>Proyectos</h2>
      <div className={styles.projects}>
        <Project name='Testing avanzado' url='#' description={description} />
        <Project name='Proyecto nuevo' url='#' description={description} />
      </div>
    </Section>
  )
}

export default ProjectsSection
