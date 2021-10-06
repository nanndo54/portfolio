import styles from '@/styles/AboutMeSection.module.css'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'

import guatemalaImage from '@img/guatemala.jpg'
import facultyImage from '@img/ingenieria.jpg'

function AboutMeSection() {
  return (
    <Section>
      <h2>
        <FormattedMessage id='aboutme.title' />
      </h2>
      <div className={styles.inline}>
        <img src={guatemalaImage} alt='Guatemala' />
        <p>
          <FormattedMessage id='aboutme.text1' />
        </p>
      </div>
      <div className={styles.inline}>
        <p>
          <FormattedMessage id='aboutme.text2' />
        </p>
        <img src={facultyImage} alt='Mi facultad' />
      </div>
      <p>
        <FormattedMessage id='aboutme.text3' />
      </p>
    </Section>
  )
}

export default AboutMeSection
