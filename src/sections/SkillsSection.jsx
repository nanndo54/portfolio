import styles from '@/styles/SkillsSection.module.css'

import Section from '@/components/Section'
import Skill from '@/components/Skill'

export default async function SkillsSection({ id, dictionary }) {
  const { list } = dictionary

  return (
    <Section id={id}>
      <h2>{dictionary.title}</h2>
      {Object.entries(list).map(([title, specificSkills]) => (
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
