import styles from '#/styles/AboutMeSection.module.css'

import Section from '#/components/Section'
import Text from '#/components/Text'
import Image from '#/components/Image'

import image1 from '/about-me/guatemala.jpg'
import image2 from '/about-me/campus.jpg'

function AboutMeSection({ id }) {
  return (
    <Section id={id}>
      <Text as='h2' localeId='about-me.title' />
      <Text as='p' localeId='about-me.text1' />
      <div className={styles.subsection}>
        <Image src={image1} alt='Guatemala, Lago de Atitlán' />
        <Text as='p' localeId='about-me.text2' />
      </div>
      <div className={styles.subsection}>
        <Image src={image2} alt='USAC' />
        <Text as='p' localeId='about-me.text3' />
      </div>
    </Section>
  )
}

export default AboutMeSection
