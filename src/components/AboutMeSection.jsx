import styles from '#/styles/AboutMeSection.module.css'

import Section from '#/components/Section'

import guatemalaImage from '#/assets/img/guatemala.jpg'
import campusImage from '#/assets/img/campus.jpg'
import Text from '#/components/Text'

function AboutMeSection() {
  return (
    <Section>
      <Text as={'h2'} localeId='aboutme.title' />
      <Text as={'p'} localeId='aboutme.text1' />
      <div className={styles.inline}>
        <img src={guatemalaImage} alt='Guatemala, Lago de Atitlán' />
        <Text as={'p'} localeId='aboutme.text2' />
      </div>
      <div className={styles.inline}>
        <img src={campusImage} alt='USAC' />
        <Text as={'p'} localeId='aboutme.text3' />
      </div>
    </Section>
  )
}

export default AboutMeSection
