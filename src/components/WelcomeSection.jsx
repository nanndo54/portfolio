import styles from '@/styles/WelcomeSection.module.css'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'

import photo from '@assets/img/profile-photo.jpg'

function WelcomeSection() {
  return (
    <Section Tag='header' className={styles.base} shadow={false} fallback={false}>
      <div className={styles.avatar}>
        <img src={photo} alt='Yo' />
      </div>
      <h1>Pablo Cabrera</h1>
      <p className='small'>
        <FormattedMessage id='welcome.status' />
      </p>
      <p className='center'>
        <FormattedMessage id='welcome.presentation' />
      </p>
    </Section>
  )
}

export default WelcomeSection
