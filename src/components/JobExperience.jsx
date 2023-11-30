import styles from '#/styles/JobExperience.module.css'

import Text from '#/components/Text'
import Button from '#/components/Button'
import Image from '#/components/Image'

function JobExperience({ company, position, logo, image, web }) {
  return (
    <article className={styles.base}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Image src={logo} alt={company} noBorder noZoom />
          <h4>{position}</h4>
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
