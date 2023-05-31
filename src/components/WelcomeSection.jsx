import styles from '@/styles/WelcomeSection.module.css'
import { useEffect, useRef, useState } from 'react'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'

import photo from '@assets/img/profile-photo.jpg'
import squeak from '@assets/sounds/squeak.mp3'
import ContactIcons from '@/components/ContactIcons'
import Button from '@/components/Button'
import useContacts from '@/hooks/useContacts'
import CvIcon from '@/svg/CvIcon'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

const squeakAudio = new Audio(squeak)

function WelcomeSection() {
  const [menuOpen, setMenuOpen] = useState(false)
  const ref = useRef(null)

  const contacts = useContacts()

  const isIntersected = useIntersectionObserver(ref, {
    once: false,
    threshold: 0.9
  })

  const CV = contacts.find((contact) => contact.name === 'CV')

  useEffect(() => {
    handleSectionIntersected(isIntersected)
  }, [isIntersected])

  const handleSectionIntersected = (isIntersected) => {
    setTimeout(() => setMenuOpen(!isIntersected), isIntersected ? 0 : 0)
  }

  const handleMenuButton = () => {
    squeakAudio.play()
    setMenuOpen(!menuOpen)
  }

  return (
    <Section
      as='header'
      background={false}
      className={`${styles.base} ${isIntersected ? '' : styles.overlay}`}
      ref={ref}
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
        </div>
        <h1 className={styles.name}>Pablo Cabrera</h1>
        <p className={styles.presentation}>
          <FormattedMessage id='welcome.presentation' />
        </p>
        <div className={styles.cvButton}>
          <a target='_blank' rel='noreferrer' href={CV?.url}>
            <Button>
              <FormattedMessage id='welcome.cv' />
              <CvIcon className={styles.cvIcon} />
            </Button>
          </a>
        </div>
      </div>
    </Section>
  )
}

export default WelcomeSection
