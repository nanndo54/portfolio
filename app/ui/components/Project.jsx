import styles from '#/styles/Project.module.css'

import Button from '#/components/Button'
import Icon from '#/components/Icon'
import ImageCarrousel from '#/components/ImageCarrousel'
import Skill from '#/components/Skill'

import skills from '#/constants/skills'

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
    <article className={`${styles.base} blur-background`}>
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
      <ImageCarrousel images={images} height={209} width={419} />
      <div className={styles.footer}>
        {code && (
          <Button type='secondary' href={code} isExternal>
            {dictionary.button1}
          </Button>
        )}
        <Button href={web} isExternal>
          {dictionary.button2}
        </Button>
      </div>
    </article>
  )
}
