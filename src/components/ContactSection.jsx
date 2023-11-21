import styles from '#/styles/ContactSection.module.css'

import Section from '#/components/Section'
import Text from '#/components/Text'

function ContactSection() {
  return (
    <Section className={styles.base} background={false}>
      <Text as={'h1'} id='contact.title' />
      <Text as={'h2'} id='contact.text1' />
    </Section>
  )
}

export default ContactSection
