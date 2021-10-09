import styles from '@/styles/AboutMeSection.module.css'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'

import guatemalaImage from '@img/guatemala.jpg'
import facultyImage from '@img/facultad.jpg'

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
      <div className={styles.inline}>
        <img src={facultyImage} alt='Facultad de Ingenieria, USAC' />
        <p>
          <FormattedMessage id='aboutme.text3' />
        </p>
      </div>
    </Section>
  )
}

export default AboutMeSection
