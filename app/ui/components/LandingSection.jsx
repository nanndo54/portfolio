import styles from '#/styles/LandingSection.module.css'

import Avatar from '#/components/Avatar'
import Button from '#/components/Button'
import ContactIcons from '#/components/ContactIcons'
import Section from '#/components/Section'
import Text from '#/components/Text'

import { CvIcon } from '#/constants/icons'
import getLocaleText from 'app/lib/getLocaleText'

export default async function LandingSection({ id }) {
  return (
    <Section as='header' background={false} className={styles.base} id={id}>
      <div className={styles.info}>
        <Text as='h1'>nanndo54</Text>
        <Text as='p' localeId='landing.presentation' className={styles.presentation} />
        <div className={styles.buttons}>
          <Button
            href={getLocaleText('link.cv')}
            download='Pablo Cabrera - CV.pdf'
            // tabIndex={isOnTop ? 0 : -1}
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
