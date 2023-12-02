import styles from '#/styles/WelcomeSection.module.css'
import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import Section from '#/components/Section'
import Text from '#/components/Text'
import ContactIcons from '#/components/ContactIcons'
import Button from '#/components/Button'
import Image from '#/components/Image'

import photo from '#/assets/img/profile-photo.jpg'
import { CvIcon } from '#/constants/icons'
import useAppStore from '#/store'

function WelcomeSection({ id }) {
  const { isOnTop } = useAppStore()
  const intl = useIntl()

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(!isOnTop)
  }, [isOnTop])

  const handleMenuButton = () => {
    if (isOnTop) return

    if (Audio) {
      const squeakAudio = new Audio('/src/assets/sounds/squeak.mp3')
      squeakAudio.volume = 0.3
      squeakAudio.play()
    }

    setMenuOpen(!menuOpen)
  }

  return (
    <Section
      as='header'
      background={false}
      className={`${styles.base} ${isOnTop ? '' : styles.overlay}`}
      id={id}
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
            tabIndex={isOnTop ? -1 : 0}
          >
            <Image src={photo} height='100%' width='100%' alt='Mi fotografía' noZoom />
          </button>
        </div>
        <Text as='h1' className={styles.name}>
          Pablo Cabrera
        </Text>
        <Text as='p' localeId='welcome.presentation' className={styles.presentation} />
        <div className={styles.buttons}>
          <Button
            href={intl.formatMessage({ id: 'link.cv' })}
            download='Pablo Cabrera - CV.pdf'
            icon={CvIcon}
            tabIndex={isOnTop ? 0 : -1}
          >
            <Text localeId='welcome.cv' />
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default WelcomeSection
