import styles from '@/styles/SkillsSection.module.css'

import Section from '@/components/Section'
import Skill from '@/components/Skill'

export default async function SkillsSection({ id, dictionary }) {
  const { title, list: skills } = dictionary[id]

  return (
    <Section id={id}>
      <h2>{title}</h2>
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
