import styles from '@/styles/ContactSection.module.css'

import ContactForm from '@/components/ContactForm'
import ContactIcons from '@/components/ContactIcons'
import Section from '@/components/Section'
import getDictionary from 'i18n/server'

export default async function ContactSection({ id }) {
  const dictionary = await getDictionary(id)
  const { title, contactText, messageText } = dictionary

  return (
    <Section className={styles.base} id={id} title={title} background={false}>
      <div className={styles.contacts}>
        <b>{contactText}</b>
        <ContactIcons />
      </div>
      <ContactForm>
        <p>{messageText}</p>
      </ContactForm>
    </Section>
  )
}
