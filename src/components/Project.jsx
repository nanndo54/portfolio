import styles from '@/styles/Project.module.css'

import Icon from '@/components/Icon'
import ImageCarrousel from '@/components/ImageCarrousel'

import Link from '@/components/Link'
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
          <h4 className='texting'>{name}</h4>
        </div>
        <p>{description}</p>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <Skill key={skill.name} {...skill} size='small' />
          ))}
        </div>
      </header>
      <ImageCarrousel images={images} height={213} width={426} />
      <footer>
        {code && (
          <Link asButton variant='secondary' href={code} isExternal decoration={false}>
            {codeButton}
            <Icon src={codeIcon} foregroundColor />
          </Link>
        )}
        <Link asButton href={website} isExternal decoration={false}>
          {websiteButton}
          <Icon src={websiteIcon} backgroundColor />
        </Link>
      </footer>
    </article>
  )
}
