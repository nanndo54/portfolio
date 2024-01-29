import styles from '@/styles/Project.module.css'

import Button from '@/components/Button'
import Icon from '@/components/Icon'
import ImageCarrousel from '@/components/ImageCarrousel'
import Skill from '@/components/Skill'

import { codeIcon, webIcon } from '@/constants/icons'
import skills from '@/constants/skills'
import clsx from 'clsx/lite'

const allSkills = Object.values(skills).reduce(
  (allSkills, skills) => [...allSkills, ...skills],
  []
)

const getSkill = (name) => allSkills.find((skill) => skill.name === name)

export default async function Project({
  name,
  web,
  code,
  technologies = [],
  icon,
  images = [],
  dictionary
}) {
  const skills = technologies.map(getSkill)

  return (
    <article className={clsx(styles.base, 'blur-background')}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Icon src={icon} alt={name} />
          <h4>{name}</h4>
        </div>
        <p>{dictionary[name.toLowerCase()]}</p>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <Skill key={skill.name} {...skill} size='small' />
          ))}
        </div>
      </div>
      <ImageCarrousel images={images} height={209} width={418} />
      <div className={styles.footer}>
        {code && (
          <Button type='secondary' href={code} isExternal>
            {dictionary.button1}
            <Icon src={codeIcon} contentColor />
          </Button>
        )}
        <Button href={web} isExternal>
          {dictionary.button2}
          <Icon src={webIcon} backgroundColor />
        </Button>
      </div>
    </article>
  )
}
