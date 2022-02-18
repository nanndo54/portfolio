import styles from '@/styles/ContactSection.module.css'
import { FormattedMessage } from 'react-intl'

import Section from '@/components/Section'

function ContactSection() {
  return (
    <Section className={styles.base} shadow={false} fallback={false}>
      <h2>
        <FormattedMessage id='contact.title' />
      </h2>
      <p className='center'>
        <FormattedMessage id='contact.text1' />
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/pabloc54/'>
          LinkedIn
        </a>
        ! 📨
      </p>
      <p className='center small'>
        <FormattedMessage id='contact.text2' />
        <a target='_blank' rel='noreferrer' href='mailto:pablofernando50259107@gmail.com'>
          pablofernando50259107@gmail.com
        </a>
        .
      </p>
    </Section>
  )
}

export default ContactSection
