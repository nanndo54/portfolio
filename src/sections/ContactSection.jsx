import styles from '@/styles/ContactSection.module.css'

import Section from '@/components/Section'
import getDictionary from 'i18n/server'

export default async function ContactSection({ id }) {
  const dictionary = await getDictionary(id)
  const { title } = dictionary

  return (
    <Section className={styles.base} id={id} title={title} background={false}></Section>
  )
}
