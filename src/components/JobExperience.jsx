import styles from '#/styles/JobExperience.module.css'

import Text from '#/components/Text'
import Button from '#/components/Button'
import Image from '#/components/Image'
import Icon from '#/components/Icon'

function JobExperience({ company, logo, image, web }) {
  return (
    <article className={styles.base}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Icon src={logo} alt={company} />
          <Text as='h4'>{company}</Text>
          {/* <Text as='h4'>{position}</Text> */}
        </div>
      </div>
      <div className={styles.content}>
        <Text as='p' localeId={`job-experience.${company.toLowerCase()}`} />
        <Image src={image} alt='company' className={styles.image} />
      </div>
      <div className={styles.footer}>
        <Button href={web} aria-label='test'>
          <Text localeId='projects.button2' />
        </Button>
      </div>
    </article>
  )
}

export default JobExperience
