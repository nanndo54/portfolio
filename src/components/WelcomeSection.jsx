import styles from '#/styles/WelcomeSection.module.css'
import { useEffect, useRef, useState } from 'react'
import { useIntl } from 'react-intl'

import Section from '#/components/Section'
import Text from '#/components/Text'
import ContactIcons from '#/components/ContactIcons'
import Button from '#/components/Button'
import Image from '#/components/Image'
import useIntersectionObserver from '#/hooks/useIntersectionObserver'

import photo from '#/assets/img/profile-photo.jpg'
import squeak from '#/assets/sounds/squeak.mp3'
import CvIcon from '#/assets/svg/cv-icon.svg?react'

function WelcomeSection() {
  const intl = useIntl()
  const ref = useRef(null)

  const [menuOpen, setMenuOpen] = useState(false)

  const isIntersected = useIntersectionObserver(ref, {
    once: false,
    threshold: 0.8
  })

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
            <Image src={photo} height='100%' width='100%' alt='Mi fotografía' noZoom />
          </button>
        </div>
        <h1 className={styles.name}>Pablo Cabrera</h1>
        <Text as={'p'} localeId='welcome.presentation' className={styles.presentation} />
        <div className={styles.buttons}>
          <Button
            href={intl.formatMessage({ id: 'link.cv' })}
            download
            icon={CvIcon}
            tabIndex={isIntersected ? 0 : -1}
          >
            <Text localeId='welcome.cv' />
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default WelcomeSection
