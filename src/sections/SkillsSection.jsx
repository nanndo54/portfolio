import styles from '@/styles/SkillsSection.module.css'

import Section from '@/components/Section'
import Skill from '@/components/Skill'
import getDictionary from 'i18n/server'

export default async function SkillsSection({ id }) {
  const dictionary = await getDictionary(id)

  const { title, list: skillsGroups } = dictionary

  return (
    <Section id={id}>
      <h2>{title}</h2>
      {skillsGroups.map((skillGroup) => (
        <div className={styles.subsection} key={skillGroup.name}>
          <h3>{skillGroup.name}</h3>
          <div className={styles.skills}>
            {skillGroup.list.map((skill) => (
              <Skill key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
