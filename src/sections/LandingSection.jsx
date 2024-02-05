import styles from '@/styles/LandingSection.module.css'

import Avatar from '@/components/Avatar'
import Button from '@/components/Button'
import ContactIcons from '@/components/ContactIcons'
import Icon from '@/components/Icon'
import RichText from '@/components/RichText'
import Section from '@/components/Section'
import { downloadIcon } from '@/constants/icons'

export default async function LandingSection({ id, dictionary }) {
  const { presentation, cv, cta, links, avatar } = dictionary[id]

  return (
    <Section as='header' background={false} className={styles.base} id={id}>
      <div className={styles.info}>
        <h1 className={styles.title}>nanndo54</h1>
        <RichText as='p' className={styles.presentation}>
          {presentation}
        </RichText>
        <div className={styles.buttons}>
          <Button
            href={cv}
            download='Pablo Cabrera - CV.pdf'
            isExternal
            // tabIndex={isOnTop ? 0 : -1}
          >
            {cta}
            <Icon src={downloadIcon} backgroundColor />
          </Button>
          <ContactIcons links={links} className={styles.contact} />
        </div>
      </div>
      <Avatar photo={avatar} />
    </Section>
  )
}
