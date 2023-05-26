import styles from '@/styles/WelcomeSection.module.css'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'

import photo from '@assets/img/profile-photo.jpg'
import squeak from '@assets/sounds/squeak.mp3'

const squeakAudio = new Audio(squeak)

function WelcomeSection() {
  const [intersected, setIntersected] = useState(true)

  return (
    <Section
      Tag='header'
      className={`${styles.base} ${intersected ? '' : styles.top}`}
      shadow={false}
      fallback={false}
      once={false}
      onIntersected={setIntersected}
      threshold={0.95}
    >
      <div className={styles.container}>
        <div className={styles.avatar} onClick={() => squeakAudio.play()}>
          <img src={photo} alt='Mi fotografía' />
        </div>
        <h1 className={styles.name}>Pablo Cabrera</h1>
        <p className={styles.presentation}>
          <FormattedMessage id='welcome.presentation' />
        </p>
      </div>
    </Section>
  )
}

export default WelcomeSection
