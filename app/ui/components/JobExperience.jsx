import styles from '#/styles/JobExperience.module.css'

import Text from '#/components/Text'
import Button from '#/components/Button'
import Icon from '#/components/Icon'
import ImageCarrousel from '#/components/ImageCarrousel'

function JobExperience({ company, logo, images, web }) {
  return (
    <article className={`${styles.base} blur-background`}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Icon src={logo} alt={company} />
          <Text as='h4'>{company}</Text>
          {/* <Text as='h4'>{position}</Text> */}
        </div>
        <Text as='p' localeId={`job-experience.${company.toLowerCase()}`} />
      </div>
      <ImageCarrousel images={images} />
      <div className={styles.footer}>
        <Button href={web}>
          <Text localeId='projects.button2' />
        </Button>
      </div>
    </article>
  )
}

export default JobExperience
