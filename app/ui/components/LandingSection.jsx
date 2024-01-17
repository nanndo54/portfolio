import styles from '#/styles/LandingSection.module.css'
import { useIntl } from 'react-intl'

import Button from '#/components/Button'
import ContactIcons from '#/components/ContactIcons'
import Image from '#/components/Image'
import Section from '#/components/Section'
import Text from '#/components/Text'

import { CvIcon, LogoIcon } from '#/constants/icons'
import images from '#/constants/images'

import useAppStore from '#/state/store'

function LandingSection({ id }) {
  const { isOnTop } = useAppStore()
  const intl = useIntl()

  const handleMenuButton = () => {
    if (isOnTop) return

    const squeakAudio = new Audio('/landing/squeak.mp3')
    squeakAudio.volume = 0.3
    squeakAudio.play()
  }

  return (
    <Section as='header' background={false} className={styles.base} id={id}>
      <div className={styles.info}>
        <Text as='h1'>nanndo54</Text>
        <Text as='p' localeId='landing.presentation' className={styles.presentation} />
        <div className={styles.buttons}>
          <Button
            href={intl.formatMessage({ id: 'link.cv' })}
            download='Pablo Cabrera - CV.pdf'
            tabIndex={isOnTop ? 0 : -1}
          >
            <Text localeId='landing.cv' />
            <CvIcon />
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
          <LogoIcon width={80} />
          <Image {...images.landing.profilePhoto} priority noZoom />
        </button>
      </div>
    </Section>
  )
}

export default LandingSection
