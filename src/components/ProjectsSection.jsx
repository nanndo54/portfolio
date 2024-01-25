import styles from '@/styles/ProjectsSection.module.css'
import { useMemo } from 'react'

import Icon from '@/components/Icon'
import Project from '@/components/Project'
import Section from '@/components/Section'

import Link from '@/components/Link'
import { arrowIcon } from '@/constants/icons'
import projects from '@/constants/projects'

export default async function ProjectsSection({ id, dictionary }) {
  const projectsPerYear = useMemo(() => {
    return projects
      .reduce((acc, project) => {
        let yearObject = acc.find((yearObject) => yearObject.year === project.year)
        if (!yearObject) {
          yearObject = { year: project.year, projects: [] }
          acc.push(yearObject)
        }

        yearObject.projects.push(project)

        return acc
      }, [])
      .sort((a, b) => b.year - a.year)
  }, [])

  return (
    <Section id={id} className={styles.base}>
      <Link href={`#${id}`} className={styles.arrow} aria-label='Ver proyectos' replace>
        <Icon src={arrowIcon} contentColor />
      </Link>
      <h2>{dictionary.title}</h2>
      <div className={styles.content}>
        <div className={styles.timeline}>
          <Icon src={arrowIcon} contentColor />
        </div>
        <div className={styles.allProjects}>
          {projectsPerYear.map(({ year, projects }) => (
            <div key={year}>
              <h3>{year}</h3>
              <div className={styles.projects}>
                {projects.map((project, i) => (
                  <Project key={i} {...project} dictionary={dictionary} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
