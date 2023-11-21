import styles from '#/styles/SkillsSection.module.css'

import Section from '#/components/Section'
import Skill from '#/components/Skill'

import skills from '#/constants/skills'
import Text from '#/components/Text'

function SkillsSection() {
  return (
    <Section>
      <Text as={'h2'} id='skills.title' />
      {Object.entries(skills).map(([title, specificSkills]) => (
        <div className={styles.subsection} key={title}>
          <h3>{title}</h3>
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
