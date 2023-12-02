import styles from '#/styles/AboutMeSection.module.css'

import Section from '#/components/Section'

import guatemalaImage from '#/assets/img/guatemala.jpg'
import campusImage from '#/assets/img/campus.jpg'
import Text from '#/components/Text'
import Image from '#/components/Image'

function AboutMeSection({ id }) {
  return (
    <Section id={id}>
      <Text as='h2' localeId='about-me.title' />
      <Text as='p' localeId='about-me.text1' />
      <div className={styles.subsection}>
        <Image src={guatemalaImage} alt='Guatemala, Lago de Atitlán' />
        <Text as='p' localeId='about-me.text2' />
      </div>
      <div className={styles.subsection}>
        <Image src={campusImage} alt='USAC' />
        <Text as='p' localeId='about-me.text3' />
      </div>
    </Section>
  )
}

export default AboutMeSection
