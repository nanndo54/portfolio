import styles from '#/styles/WelcomeSection.module.css'
import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import Button from '#/components/Button'
import ContactIcons from '#/components/ContactIcons'
import Icon from '#/components/Icon'
import Image from '#/components/Image'
import Link from '#/components/Link'
import Section from '#/components/Section'
import Text from '#/components/Text'

import { CvIcon, LogoIcon } from '#/constants/icons.json'
import useAppStore from '#/state/store'
import sections from '#/constants/sections'
import getCurrentSection from '#/state/getCurrentSection'

function WelcomeSection({ id }) {
  const { isOnTop } = useAppStore()
  const intl = useIntl()
  const currentSection = getCurrentSection()

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(!isOnTop)
  }, [isOnTop])

  const handleMenuButton = () => {
    if (isOnTop) return

    if (Audio) {
      const squeakAudio = new Audio('/sounds/squeak.mp3')
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
      <div className={styles.info}>
        <Text as='h1'>Pablo Cabrera</Text>
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
      <div className={styles.avatar}>
        <button
          type='button'
          onClick={(ev) => handleMenuButton(ev.target.value)}
          tabIndex={isOnTop ? -1 : 0}
        >
          <Icon src={LogoIcon} width={80} />
          <Image src='img/profile-photo.jpg' alt='Mi fotografía' noZoom />
        </button>
        <ContactIcons
          className={`${styles.contact} ${menuOpen ? styles.open : ''}`}
          tabIndex={menuOpen ? 0 : -1}
        />
        <div className={styles.links}>
          {sections
            .filter(({ hideInNavbar }) => !hideInNavbar)
            .map(({ id }) => (
              <Link
                key={id}
                href={`#${id}`}
                className={`${styles.link} ${
                  id === currentSection ? styles.current : ''
                }`}
                noDecoration
                tabIndex={isOnTop ? -1 : 0}
              >
                <Text localeId={`${id}.title`} />
              </Link>
            ))}
        </div>
      </div>
    </Section>
  )
}

export default WelcomeSection
