import styles from '@/styles/Project.module.css'

import Button from '@/components/Button'
import Icon from '@/components/Icon'
import ImageCarrousel from '@/components/ImageCarrousel'

import Skill from '@/components/Skill'
import { codeIcon, websiteIcon } from '@/constants/icons'
import clsx from 'clsx/lite'
import getDictionary from 'i18n/server'

export default async function Project({
  icon,
  name,
  description,
  website,
  code,
  allSkills,
  technologies = [],
  images = []
}) {
  const dictionary = await getDictionary('projects')
  const { codeButton, websiteButton } = dictionary

  const skills = technologies.map((name) =>
    allSkills.find((skill) => skill.name === name)
  )

  return (
    <article className={clsx(styles.base, 'blur-background')}>
      <header>
        <div className={styles.title}>
          <Icon src={icon} alt={name} />
          <h4>{name}</h4>
        </div>
        <p>{description}</p>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <Skill key={skill.name} {...skill} type='secondary' size='small' />
          ))}
        </div>
      </header>
      <ImageCarrousel images={images} height={213} width={426} />
      <footer>
        {code && (
          <Button type='secondary' href={code} isExternal>
            {codeButton}
            <Icon src={codeIcon} contentColor />
          </Button>
        )}
        <Button href={website} isExternal>
          {websiteButton}
          <Icon src={websiteIcon} backgroundColor />
        </Button>
      </footer>
    </article>
  )
}
