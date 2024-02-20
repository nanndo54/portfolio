import styles from '@/styles/LandingSection.module.css'

import Avatar from '@/components/Avatar'
import EmailButton from '@/components/EmailButton'
import Hint from '@/components/Hint'
import Icon from '@/components/Icon'
import Link from '@/components/Link'
import RichText from '@/components/RichText'
import Section from '@/components/Section'
import { downloadIcon } from '@/constants/icons'
import getDictionary from 'i18n/server'

export default async function LandingSection({ id }) {
  const dictionary = await getDictionary()

  const { landing, aria } = dictionary
  const { name, presentation, cv, cvButton, avatar } = landing

  return (
    <Section as='header' background={false} className={styles.base} id={id}>
      <div className={styles.info}>
        <h1 className={styles.title}>{name}</h1>
        <RichText as='p' className={styles.presentation}>
          {presentation}
        </RichText>
        <div className={styles.buttons}>
          <EmailButton />
          <Hint position='bottom' label={aria.downloaded} showOnClick>
            <Link
              asButton
              variant='primary'
              href={cv}
              download={`${name} CV.pdf`}
              isExternal
              decoration={false}
            >
              {cvButton}
              <Icon src={downloadIcon} backgroundColor />
            </Link>
          </Hint>
          {/* <ContactIcons links={links} className={styles.contact} /> */}
        </div>
      </div>
      <Avatar className={styles.avatar} photo={avatar} />
    </Section>
  )
}
