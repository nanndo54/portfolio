import styles from '#/styles/Project.module.css'
import { useState } from 'react'

import Skill from '#/components/Skill'
import Text from '#/components/Text'
import { getSkill } from '#/constants/skills'
import ArrowIcon from '#/assets/svg/arrow.svg?react'
import Icon from '#/components/Icon'
import LinkButton from '#/components/LinkButton'

function Project({ name, web, code, technologies = [], icon, images = [] }) {
  console.log('🚀 | name:', name)
  const [imageIndex, setImageIndex] = useState(0)

  const handleImageChange = (index) => {
    setImageIndex(index)
  }

  const skills = technologies.map(getSkill)

  return (
    <article className={styles.base}>
      <div className={styles.header}>
        <div className={styles.title}>
          <img src={icon} alt={name} />
          <h4>{name}</h4>
        </div>
      </div>
      <div className={styles.content}>
        <Text as={'p'} localeId={`project.${name.toLowerCase()}`} />
        <div className={styles.skills}>
          {skills.map((skill) => (
            <Skill key={skill.name} {...skill} size='small' />
          ))}
        </div>
        <div className={styles.imageCarousel}>
          <button
            className={styles.previousImage}
            onClick={() => {
              handleImageChange((imageIndex - 1 + images.length) % images.length)
            }}
          >
            <Icon icon={ArrowIcon} contentColor />
          </button>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${images[imageIndex]})` }}
          />
          <button
            className={styles.nextImage}
            onClick={() => {
              handleImageChange((imageIndex + 1) % images.length)
            }}
          >
            <Icon icon={ArrowIcon} contentColor />
          </button>
        </div>
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              className={imageIndex === index ? styles.selected : ''}
              onClick={() => handleImageChange(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <LinkButton target='_blank' rel='noreferrer' href={code} type='secondary'>
          <Text localeId='projects.button1' />
        </LinkButton>
        <LinkButton target='_blank' rel='noreferrer' href={web}>
          <Text localeId='projects.button2' />
        </LinkButton>
      </div>
    </article>
  )
}

export default Project
