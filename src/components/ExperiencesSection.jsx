import styles from '#/styles/ExperiencesSection.module.css'

import Section from '#/components/Section'
import Experience from '#/components/Experience'

import experiences from '#/constants/experiences'
import Text from '#/components/Text'

function ExperienceSection() {
  return (
    <Section>
      <Text as={'h2'} id='experiences.title' />
      <Text as={'p'} id='experiences.text1' />
      <div className={styles.experiences}>
        {experiences.map((experience) => (
          <Experience key={experience.name} {...experience} />
        ))}
      </div>
    </Section>
  )
}

export default ExperienceSection
