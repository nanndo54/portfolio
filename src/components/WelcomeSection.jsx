import styles from '@/styles/WelcomeSection.module.css'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'

import photo from '@img/profile-photo.jpg'

function WelcomeSection() {
  return (
    <Section shadow={false} fallback={false} Tag='header'>
      <div className={styles.avatar}>
        <img src={photo} alt='Yo' />
      </div>
      <h1>Pablo Cabrera (pabloc54)</h1>
      <p className='small'>
        <FormattedMessage id='welcome.status' />
      </p>
      <p className='center'>
        <FormattedMessage id='welcome.presentation' />
      </p>
      <p className='center'>
        <FormattedMessage id='welcome.invitation' />
      </p>
    </Section>
  )
}

export default WelcomeSection
