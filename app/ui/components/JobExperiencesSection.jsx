import styles from '#/styles/JobExperiencesSection.module.css'
import { useMemo } from 'react'

import Icon from '#/components/Icon'
import JobExperience from '#/components/JobExperience'
import Link from '#/components/Link'
import Section from '#/components/Section'
import Text from '#/components/Text'

import jobs from '#/constants/jobs'
import { arrowIcon } from '#/constants/icons'

function JobExperiencesSection({ id }) {
  const jobsPerYear = useMemo(() => {
    return jobs
      .reduce((acc, project) => {
        let yearObject = acc.find((yearObject) => yearObject.year === project.year)
        if (!yearObject) {
          yearObject = { year: project.year, jobs: [] }
          acc.push(yearObject)
        }

        yearObject.jobs.push(project)

        return acc
      }, [])
      .sort((a, b) => b.year - a.year)
  }, [jobs])

  return (
    <Section id={id} className={styles.base}>
      <Link href={`#${id}`} className={styles.arrow} aria-label='Ver experiencia laboral'>
        <Icon src={arrowIcon} />
      </Link>
      <Text as='h2' localeId='job-experience.title' />
      <div className={styles.content}>
        <div className={styles.timeline}>
          <Icon src={arrowIcon} />
        </div>
        <div className={styles.allExperiences}>
          {jobsPerYear.map(({ year, jobs }) => (
            <div key={year}>
              <Text as='h3'>{year}</Text>
              <div className={styles.experiences}>
                {jobs.map((experience, i) => (
                  <JobExperience key={i} {...experience} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default JobExperiencesSection
