import styles from '@/styles/ContactSection.module.css'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'

function ContactSection() {
  return (
    <Section className={styles.base}>
      <h1 className={styles.title}>
        <FormattedMessage id='contact.title' />
      </h1>
      <h3 className='center'>
        <FormattedMessage id='contact.text1' />
      </h3>
    </Section>
  )
}

export default ContactSection
