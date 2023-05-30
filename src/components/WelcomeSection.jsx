import styles from '@/styles/WelcomeSection.module.css'
import { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'

import photo from '@assets/img/profile-photo.jpg'
import squeak from '@assets/sounds/squeak.mp3'
import ContactIcons from '@/components/ContactIcons'
import Button from '@/components/Button'
import useContacts from '@/hooks/useContacts'
import CvIcon from '@/svg/CvIcon'

const squeakAudio = new Audio(squeak)

function WelcomeSection() {
  const [intersected, setIntersected] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const contacts = useContacts()
  const CV = contacts.find((contact) => contact.name === 'CV')

  useEffect(() => {
    setIntersected(window.innerWidth >= 300 && window.innerHeight >= 500)
  }, [])

  const handleSectionIntersected = (isIntersected) => {
    setTimeout(() => setMenuOpen(!isIntersected), isIntersected ? 0 : 150)
    setTimeout(() => setIntersected(isIntersected), isIntersected ? 150 : 0)
  }

  const handleMenuButton = () => {
    squeakAudio.play()
    setMenuOpen(!menuOpen)
  }

  return (
    <Section
      tag='header'
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
          <button
            className={styles.avatarButton}
            onClick={(ev) => handleMenuButton(ev.target.value)}
          >
            <img src={photo} alt='Mi fotografía' />
          </button>
          <a className='reset' target='_blank' rel='noreferrer' href={CV?.url}>
            <Button className={styles.cvButton}>
              <FormattedMessage id='welcome.cv' />
              <CvIcon className={styles.cvIcon} />
            </Button>
          </a>
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
