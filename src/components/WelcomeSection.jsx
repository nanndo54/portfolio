import styles from '@/styles/WelcomeSection.module.css'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'

import photo from '@assets/img/profile-photo.jpg'
import squeak from '@assets/sounds/squeak.mp3'
import ContactIcons from '@/components/ContactIcons'

const squeakAudio = new Audio(squeak)

function WelcomeSection() {
  const [intersected, setIntersected] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSectionIntersected = (isIntersected) => {
    setTimeout(() => setMenuOpen(!isIntersected), isIntersected ? 0 : 200)
    setTimeout(() => setIntersected(isIntersected), isIntersected ? 200 : 0)
  }

  const handleMenuButton = () => {
    squeakAudio.play()
    setMenuOpen(!menuOpen)
  }

  return (
    <Section
      Tag='header'
      className={`${styles.base} ${intersected ? '' : styles.top}`}
      shadow={false}
      fallback={false}
      once={false}
      onIntersected={handleSectionIntersected}
      threshold={0.8}
    >
      <div className={styles.container}>
        <div className={styles.avatar}>
          <ContactIcons className={`${styles.contact} ${menuOpen ? styles.open : ''}`} />
          <button onClick={(ev) => handleMenuButton(ev.target.value)}>
            <img src={photo} alt='Mi fotografía' />
          </button>
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
