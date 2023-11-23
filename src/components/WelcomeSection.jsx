import styles from '#/styles/WelcomeSection.module.css'
import { useEffect, useRef, useState } from 'react'

import Section from '#/components/Section'
import Text from '#/components/Text'
import ContactIcons from '#/components/ContactIcons'
import LinkButton from '#/components/LinkButton'
import useIntersectionObserver from '#/hooks/useIntersectionObserver'
import contacts from '#/constants/contacts'

import photo from '#/assets/img/profile-photo.jpg'
import squeak from '#/assets/sounds/squeak.mp3'
import CvIcon from '#/assets/svg/cv-icon.svg?react'

function WelcomeSection() {
  const [menuOpen, setMenuOpen] = useState(false)
  const ref = useRef(null)

  const isIntersected = useIntersectionObserver(ref, {
    once: false,
    threshold: 0.8
  })

  const CV = contacts.find((contact) => contact.name === 'CV')

  useEffect(() => {
    setMenuOpen(!isIntersected)
  }, [isIntersected])

  const handleMenuButton = () => {
    if (isIntersected) return

    if (Audio) {
      const squeakAudio = new Audio(squeak)
      squeakAudio.volume = 0.3
      squeakAudio.play()
    }

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
          <ContactIcons
            className={`${styles.contact} ${menuOpen ? styles.open : ''}`}
            tabIndex={menuOpen ? 0 : -1}
          />
          <button
            type='button'
            className={styles.avatarButton}
            onClick={(ev) => handleMenuButton(ev.target.value)}
            tabIndex={isIntersected ? -1 : 0}
          >
            <img src={photo} alt='Mi fotografía' />
          </button>
        </div>
        <h1 className={styles.name}>Pablo Cabrera</h1>
        <Text as={'p'} localeId='welcome.presentation' className={styles.presentation} />
        <div className={styles.buttons}>
          <LinkButton
            target='_blank'
            rel='noreferrer'
            href={CV?.url}
            icon={CvIcon}
            tabIndex={isIntersected ? 0 : -1}
          >
            <Text localeId='welcome.cv' />
          </LinkButton>
        </div>
      </div>
    </Section>
  )
}

export default WelcomeSection
