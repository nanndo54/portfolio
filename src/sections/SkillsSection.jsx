import styles from '@/styles/SkillsSection.module.css'

import Section from '@/components/Section'
import Skill from '@/components/Skill'
import SkillsGroup from '@/components/SkillsGroup'
import getDictionary from 'i18n/server'

export default async function SkillsSection({ id }) {
  const dictionary = await getDictionary(id)

  const { title, content } = dictionary

  return (
    <Section id={id} title={title} className={styles.base}>
      <div className={styles.content}>
        {content.map((skillGroup) => (
          <SkillsGroup key={skillGroup.name} name={skillGroup.name}>
            {skillGroup.skills.map((skill) => (
              <Skill key={skill.name} className='interactive-border' {...skill} />
            ))}
          </SkillsGroup>
        ))}
      </div>
    </Section>
  )
}
