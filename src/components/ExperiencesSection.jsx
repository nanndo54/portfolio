import styles from '#/styles/ExperiencesSection.module.css'

import Section from '#/components/Section'
import Experience from '#/components/Experience'
import Text from '#/components/Text'
import Icon from '#/components/Icon'

import experiences from '#/constants/experiences'
import ArrowIcon from '#/assets/svg/arrow.svg?react'

function ExperiencesSection() {
  const years = experiences.reduce((acc, project) => {
    const year = project.year
    if (!acc[year]) acc[year] = []
    acc[year].push(project)

    return acc
  }, {})

  return (
    <Section>
      <Text as={'h2'} localeId='experiences.title' />
      <Text as={'p'} localeId='experiences.text1' />
      <div className={styles.content}>
        <div className={styles.timeline}>
          <Icon icon={ArrowIcon} />
        </div>
        <div className={styles.allProjects}>
          {Object.entries(years).map(([year, projects]) => (
            <div key={year} className={styles.projects}>
              <h3>{year}</h3>
              {projects.map((project, i) => (
                <Experience key={i} {...project} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ExperiencesSection
