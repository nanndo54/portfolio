import styles from '#/styles/ContactSection.module.css'

import Section from '#/components/Section'
import Text from '#/components/Text'

function ContactSection({ id }) {
  return (
    <Section className={styles.base} id={id} background={false}>
      <Text as='h1' localeId='contact.title' />
      <Text as='h2' localeId='contact.text1' />
    </Section>
  )
}

export default ContactSection
