import styles from '#/styles/LandingSection.module.css'

import Avatar from '#/components/Avatar'
import Button from '#/components/Button'
import ContactIcons from '#/components/ContactIcons'
import Section from '#/components/Section'

import RichText from '#/components/RichText'
import { CvIcon } from '#/constants/icons'

export default async function LandingSection({ id, dictionary }) {
  return (
    <Section as='header' background={false} className={styles.base} id={id}>
      <div className={styles.info}>
        <h1>nanndo54</h1>
        <RichText as='p' className={styles.presentation}>
          {dictionary.presentation}
        </RichText>
        <div className={styles.buttons}>
          <Button
            href={dictionary.cv}
            download='Pablo Cabrera - CV.pdf'
            // tabIndex={isOnTop ? 0 : -1}
          >
            {dictionary.cta}
            <CvIcon />
          </Button>
          <ContactIcons className={styles.contact} />
        </div>
      </div>
      <Avatar />
    </Section>
  )
}
