import styles from '#/styles/JobExperiencesSection.module.css'

import Section from '#/components/Section'
import JobExperience from '#/components/JobExperience'
import Text from '#/components/Text'
import Icon from '#/components/Icon'

import jobs from '#/constants/jobs'
import { ArrowIcon } from '#/constants/icons'
import useAppStore from '#/store'

function JobExperiencesSection({ id }) {
  const { isOnTop } = useAppStore()

  const years = jobs.reduce((acc, project) => {
    const year = project.year
    if (!acc[year]) acc[year] = []
    acc[year].push(project)

    return acc
  }, {})

  return (
    <Section id={id} className={`${styles.base} ${isOnTop ? styles.magnetic : ''}`}>
      <Text as='h2' localeId='job-experience.title' />
      <Text as='p' localeId='job-experience.text1' />
      <div className={styles.content}>
        <div className={styles.timeline}>
          <Icon src={ArrowIcon} />
        </div>
        <div className={styles.allExperiences}>
          {Object.entries(years).map(([year, experiences]) => (
            <div key={year} className={styles.experiences}>
              <Text as='h3'>{year}</Text>
              {experiences.map((experience, i) => (
                <JobExperience key={i} {...experience} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default JobExperiencesSection
