import styles from '@/styles/SkillsSection.module.css'

import Section from '@/components/Section'
import SkillsGroup from '@/components/SkillsGroup'
import getDictionary from 'i18n/server'

export default async function SkillsSection({ id }) {
  const dictionary = await getDictionary(id)

  const { title, list: skillsGroups } = dictionary

  return (
    <Section id={id}>
      <h2>{title}</h2>
      <div className={styles.allSkills}>
        {skillsGroups.map((skillGroup) => (
          <SkillsGroup key={skillGroup.name} {...skillGroup} />
        ))}
      </div>
    </Section>
  )
}
