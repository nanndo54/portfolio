import styles from '@/styles/SkillsSection.module.css'

import Section from '@/components/Section'
import Skill from '@/components/Skill'
import SkillsGroup from '@/components/SkillsGroup'
import getDictionary from 'i18n/server'

export default async function SkillsSection({ id }) {
  const dictionary = await getDictionary(id)

  const { title, content: skillsGroups } = dictionary

  return (
    <Section id={id}>
      <h2 className='interactive-text'>{title}</h2>
      <div className={styles.allSkills}>
        {skillsGroups.map((skillGroup) => (
          <SkillsGroup key={skillGroup.name} name={skillGroup.name}>
            {skillGroup.skills.map((skill) => (
              <Skill key={skill.name} {...skill} />
            ))}
          </SkillsGroup>
        ))}
      </div>
    </Section>
  )
}
