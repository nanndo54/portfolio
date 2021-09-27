import styles from '@/styles/SkillsSection.module.css'
import React from 'react'

import Section from './Section'
import Skill from './Skill'

import skills from '@/constants/skills'

function SkillsSection() {
  return (
    <Section>
      <h2>Habilidades</h2>
      <p className='small'>(Haz click para más detalles)</p>
      <div className={styles.base}>
        {Object.entries(skills).map(([title, specificSkills]) => (
          <div key={title}>
            <h3>{title}</h3>
            <div className={styles.skills}>
              {specificSkills.map((skill, i) => (
                <Skill key={i} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default SkillsSection
