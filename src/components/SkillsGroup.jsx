import styles from '@/styles/SkillsGroup.module.css'

import Skill from '@/components/Skill'
import clsx from 'clsx/lite'

export default async function SkillsGroup({ name, skills }) {
  return (
    <div className={clsx(styles.base, 'interactive-border')}>
      <h3 className='interactive-text'>{name}</h3>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  )
}
