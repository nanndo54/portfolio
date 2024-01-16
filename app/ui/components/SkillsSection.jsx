import styles from '#/styles/SkillsSection.module.css'

import Section from '#/components/Section'
import Skill from '#/components/Skill'
import Text from '#/components/Text'

import skills from '#/constants/skills'

function SkillsSection({ id }) {
  return (
    <Section id={id}>
      <Text as='h2' localeId='skills.title' />
      {Object.entries(skills).map(([title, specificSkills]) => (
        <div className={styles.subsection} key={title}>
          <Text as='h3'>{title}</Text>
          <div className={styles.skills}>
            {specificSkills.map((skill) => (
              <Skill key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}

export default SkillsSection
