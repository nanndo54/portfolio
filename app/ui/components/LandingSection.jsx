import styles from '#/styles/LandingSection.module.css'
import { useIntl } from 'react-intl'

import Button from '#/components/Button'
import ContactIcons from '#/components/ContactIcons'
import Section from '#/components/Section'
import Text from '#/components/Text'

import { CvIcon } from '#/constants/icons'

import Avatar from '#/components/Avatar'
import useAppStore from '#/state/store'

function LandingSection({ id }) {
  const { isOnTop } = useAppStore()
  const intl = useIntl()

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
      <Avatar />
    </Section>
  )
}

export default LandingSection
