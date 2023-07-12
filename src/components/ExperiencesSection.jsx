import styles from '#/styles/ExperiencesSection.module.css'
import { FormattedMessage } from 'react-intl'

import Section from '#/components/Section'
import Experience from '#/components/Experience'

import experiences from '#/constants/experiences'

function ExperienceSection() {
  return (
    <Section>
      <h2>
        <FormattedMessage id='experiences.title' />
      </h2>
      <p>
        <FormattedMessage id='experiences.text1' />
      </p>
      <div className={styles.experiences}>
        {experiences.map((experience) => (
          <Experience key={experience.name} {...experience} />
        ))}
      </div>
    </Section>
  )
}

export default ExperienceSection
