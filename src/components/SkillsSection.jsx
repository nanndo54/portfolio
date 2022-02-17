import styles from '@/styles/SkillsSection.module.css'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'
import Skill from '@/components/Skill'

import skills from '@/constants/skills'

function SkillsSection() {
  return (
    <Section>
      <h2>
        <FormattedMessage id='skills.title' />
      </h2>
      {Object.entries(skills).map(([title, specificSkills]) => (
        <div className={styles.subsection} key={title}>
          <h3>{title}</h3>
          <div className={styles.skills}>
            {specificSkills.map((skill, i) => (
              <Skill key={i} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}

export default SkillsSection
