import styles from '@/styles/SkillsSection.module.css'
import React from 'react'

import Section from './Section'
import Skill from './Skill'

import skills from '@/constants/skills'

function SkillsSection() {
  return (
    <Section>
      <h2>Habilidades</h2>
      <p>Haz click para más detalles</p>
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
