import styles from '#/styles/LandingSection.module.css'
import { useIntl } from 'react-intl'

import Button from '#/components/Button'
import ContactIcons from '#/components/ContactIcons'
import Icon from '#/components/Icon'
import Image from '#/components/Image'
import Section from '#/components/Section'
import Text from '#/components/Text'

import { cvIcon, logoIcon } from '#/constants/icons'
import useAppStore from '#/state/store'

import profileImage from '#/assets/landing/profile-photo.jpg'

function LandingSection({ id }) {
  const { isOnTop } = useAppStore()
  const intl = useIntl()

  const handleMenuButton = () => {
    if (isOnTop) return

    if (Audio) {
      const squeakAudio = new Audio('/sounds/squeak.mp3')
      squeakAudio.volume = 0.3
      squeakAudio.play()
    }
  }

  return (
    <Section as='header' background={false} className={styles.base} id={id}>
      <div className={styles.info}>
        <Text as='h1'>Pablo Cabrera</Text>
        <Text as='p' localeId='welcome.presentation' className={styles.presentation} />
        <div className={styles.buttons}>
          <Button
            href={intl.formatMessage({ id: 'link.cv' })}
            download='Pablo Cabrera - CV.pdf'
            icon={cvIcon}
            tabIndex={isOnTop ? 0 : -1}
          >
            <Text localeId='welcome.cv' />
          </Button>
          <ContactIcons className={styles.contact} />
        </div>
      </div>
      <div className={styles.avatar}>
        <button
          type='button'
          onClick={(ev) => handleMenuButton(ev.target.value)}
          tabIndex={isOnTop ? -1 : 0}
        >
          <Icon src={logoIcon} width={80} />
          <Image src={profileImage} alt='Mi fotografía' noZoom />
        </button>
      </div>
    </Section>
  )
}

export default LandingSection
