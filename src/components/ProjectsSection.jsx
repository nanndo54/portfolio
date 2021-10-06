import styles from '@/styles/ProjectsSection.module.css'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'
import Project from '@/components/Project'

import projects from '@/constants/projects'

function ProjectsSection() {
  return (
    <Section>
      <h2>
        <FormattedMessage id='projects.title' />
      </h2>
      <div className={styles.projects}>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default ProjectsSection
