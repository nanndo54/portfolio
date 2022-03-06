import styles from '@/styles/AboutMeSection.module.css'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'

import guatemalaImage from '@assets/img/guatemala.jpg'
import campusImage from '@assets/img/campus.jpg'
// import landscapeImage from '@assets/img/landscape.jpg'

function AboutMeSection() {
  return (
    <Section>
      <h2>
        <FormattedMessage id='aboutme.title' />
      </h2>
      <p>
        <FormattedMessage id='aboutme.text1' />
      </p>
      <div className={styles.inline}>
        <img src={guatemalaImage} alt='Guatemala, Lago de Atitlán' />
        <p>
          <FormattedMessage id='aboutme.text2' />
        </p>
      </div>
      {/* <div className={`${styles.inline} ${styles.reversed}`}>
        <p>
          <FormattedMessage id='aboutme.text3' />
        </p>
        <img src={landscapeImage} alt='pending' />
      </div> */}
      <div className={styles.inline}>
        <img src={campusImage} alt='USAC' />
        <p>
          <FormattedMessage id='aboutme.text4' />
        </p>
      </div>
    </Section>
  )
}

export default AboutMeSection
