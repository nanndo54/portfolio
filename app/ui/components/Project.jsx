import styles from '#/styles/Project.module.css'

import Button from '#/components/Button'
import Icon from '#/components/Icon'
import ImageCarrousel from '#/components/ImageCarrousel'
import Skill from '#/components/Skill'
import Text from '#/components/Text'

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
  images = []
}) {
  const skills = technologies.map(getSkill)

  return (
    <article className={`${styles.base} blur-background`}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Icon src={icon} alt={name} />
          <Text as='h4'>{name}</Text>
        </div>
        <Text as='p' localeId={`project.${name.toLowerCase()}`} />
        <div className={styles.skills}>
          {skills.map((skill) => (
            <Skill key={skill.name} {...skill} size='small' />
          ))}
        </div>
      </div>
      <ImageCarrousel images={images} />
      <div className={styles.footer}>
        {code && (
          <Button type='secondary' href={code} isExternal>
            <Text localeId='projects.button1' />
          </Button>
        )}
        <Button href={web} isExternal>
          <Text localeId='projects.button2' />
        </Button>
      </div>
    </article>
  )
}
