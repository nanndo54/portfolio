import styles from '#/styles/ProjectsSection.module.css'

import Section from '#/components/Section'
import Project from '#/components/Project'
import Text from '#/components/Text'
import Icon from '#/components/Icon'

import projects from '#/constants/projects'
import ArrowIcon from '#/assets/svg/arrow.svg?react'

function ProjectsSection() {
  const years = projects.reduce((acc, project) => {
    const year = project.year
    if (!acc[year]) acc[year] = []
    acc[year].push(project)

    return acc
  }, {})

  return (
    <Section>
      <Text as={'h2'} localeId='projects.title' />
      <Text as={'p'} localeId='projects.text1' />
      <div className={styles.content}>
        <div className={styles.timeline}>
          <Icon icon={ArrowIcon} />
        </div>
        <div className={styles.allProjects}>
          {Object.entries(years).map(([year, projects]) => (
            <div key={year} className={styles.projects}>
              <h3>{year}</h3>
              {projects.map((project, i) => (
                <Project key={i} {...project} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ProjectsSection
