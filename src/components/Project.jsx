import styles from '#/styles/Project.module.css'
import { FormattedMessage } from 'react-intl'

import Skill from '#/components/Skill'
import { getSkill } from '#/constants/skills'

function Project({ name, url = '', technologies = [], images = [] }) {
  const [preview1, preview2] = images

  const skills = technologies.map((name) => getSkill(name))

  return (
    <article className={styles.base}>
      <div className={styles.header}>
        <h3>
          <a target='_blank' rel='noreferrer' href={url}>
            {name}
          </a>
        </h3>
      </div>
      <div className={styles.content}>
        <p>
          <FormattedMessage id={`project.${name.toLowerCase()}`} />
        </p>
        <div className={styles.images}>
          <img src={preview1} alt={`${name} preview 1`} />
          <img src={preview2} alt={`${name} preview 2`} />
        </div>
      </div>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} size='small' />
        ))}
      </div>
    </article>
  )
}

export default Project
