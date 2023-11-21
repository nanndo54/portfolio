import styles from '#/styles/ProjectsSection.module.css'

import Section from '#/components/Section'
import Project from '#/components/Project'
import Text from '#/components/Text'

import projects from '#/constants/projects'

function ProjectsSection() {
  return (
    <Section>
      <Text as={'h2'} id='projects.title' />
      <Text as={'p'} id='projects.text1' />
      <div className={styles.projects}>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default ProjectsSection
