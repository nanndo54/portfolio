import styles from '@/styles/Project.module.css'

import Button from '@/components/Button'
import Icon from '@/components/Icon'
import ImageCarrousel from '@/components/ImageCarrousel'

import { codeIcon, websiteIcon } from '@/constants/icons'
import clsx from 'clsx/lite'

// const allSkills = Object.values(cv.skills).reduce(
//   (allSkills, skills) => [...allSkills, ...skills],
//   []
// )

// const getSkill = (name) => allSkills.find((skill) => skill.name === name)

export default async function Project({
  icon,
  name,
  description,
  website,
  code,
  technologies = [],
  images = [],
  dictionary
}) {
  // const skills = technologies.map(getSkill)

  return (
    <article className={clsx(styles.base, 'blur-background')}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Icon src={icon} alt={name} />
          <h4>{name}</h4>
        </div>
        <p>{description}</p>
        <div className={styles.skills}>
          {/* {skills.map((skill) => (
            <Skill key={skill.name} {...skill} type='secondary' size='small' />
          ))} */}
        </div>
      </div>
      <ImageCarrousel images={images} height={213} width={426} />
      <div className={styles.footer}>
        {code && (
          <Button type='secondary' href={code} isExternal>
            {dictionary.codeButton}
            <Icon src={codeIcon} contentColor />
          </Button>
        )}
        <Button href={website} isExternal>
          {dictionary.websiteButton}
          <Icon src={websiteIcon} backgroundColor />
        </Button>
      </div>
    </article>
  )
}
