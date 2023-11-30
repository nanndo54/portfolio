import styles from '#/styles/Project.module.css'
import { useState } from 'react'

import Skill from '#/components/Skill'
import Text from '#/components/Text'
import { getSkill } from '#/constants/skills'
import ArrowIcon from '#/assets/svg/arrow.svg?react'
import Icon from '#/components/Icon'
import Button from '#/components/Button'
import Image from '#/components/Image'

function Project({ name, web, code, technologies = [], icon, images = [] }) {
  const [imageIndex, setImageIndex] = useState(0)

  const handleImageChange = (index) => {
    setImageIndex(index)
  }

  const skills = technologies.map(getSkill)

  return (
    <article className={styles.base}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Image src={icon} height={40} width={40} alt={name} />
          <h4>{name}</h4>
        </div>
      </div>
      <div className={styles.content}>
        <Text as='p' localeId={`project.${name.toLowerCase()}`} />
        <div className={styles.skills}>
          {skills.map((skill) => (
            <Skill key={skill.name} {...skill} size='small' />
          ))}
        </div>
        <div className={styles.imageCarousel}>
          <button
            aria-label='Ver imagen anterior'
            className={styles.previousImage}
            onClick={() => {
              handleImageChange((imageIndex - 1 + images.length) % images.length)
            }}
          >
            <Icon src={ArrowIcon} contentColor />
          </button>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${images[imageIndex]})` }}
          />
          <button
            aria-label='Ver imagen siguiente'
            className={styles.nextImage}
            onClick={() => {
              handleImageChange((imageIndex + 1) % images.length)
            }}
          >
            <Icon src={ArrowIcon} contentColor />
          </button>
        </div>
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              aria-label={`Ver imagen ${index + 1}`}
              key={index}
              className={imageIndex === index ? styles.selected : ''}
              onClick={() => handleImageChange(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <Button href={code} type='secondary'>
          <Text localeId='projects.button1' />
        </Button>
        <Button href={web}>
          <Text localeId='projects.button2' />
        </Button>
      </div>
    </article>
  )
}

export default Project
