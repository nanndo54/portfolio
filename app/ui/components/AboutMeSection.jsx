import styles from '#/styles/AboutMeSection.module.css'

import Section from '#/components/Section'
import Text from '#/components/Text'
import Image from '#/components/Image'
import images from '#/constants/images'

function AboutMeSection({ id }) {
  return (
    <Section id={id}>
      <Text as='h2' localeId='about-me.title' />
      <Text as='p' localeId='about-me.text1' />
      <div className={styles.subsection}>
        <Image {...images.aboutMe.guatemala} />
        <Text as='p' localeId='about-me.text2' />
      </div>
      <div className={styles.subsection}>
        <Image {...images.aboutMe.campus} />
        <Text as='p' localeId='about-me.text3' />
      </div>
    </Section>
  )
}

export default AboutMeSection
