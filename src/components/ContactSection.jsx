import styles from '#styles/ContactSection.module.css'
import { FormattedMessage } from 'react-intl'

import Section from '#components/Section'
// import ContactIcons from '#components/ContactIcons'

function ContactSection() {
  return (
    <Section className={styles.base} background={false}>
      <h1 className={styles.title}>
        <FormattedMessage id='contact.title' />
      </h1>
      <h2 className='center'>
        <FormattedMessage id='contact.text1' />
      </h2>
      {/* <ContactIcons /> */}
    </Section>
  )
}

export default ContactSection
