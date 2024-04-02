import styles from '@/styles/ContactSection.module.css'

import ContactForm from '@/components/ContactForm'
import ContactIcons from '@/components/ContactIcons'
import Section from '@/components/Section'
import getDictionary from 'i18n/server'

export default async function ContactSection({ id }) {
  const dictionary = await getDictionary(id)
  const { title, messageText } = dictionary

  return (
    <Section className={styles.base} id={id} background={false}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <ContactIcons />
      </div>
      <ContactForm>
        <b>{messageText}</b>
      </ContactForm>
    </Section>
  )
}
