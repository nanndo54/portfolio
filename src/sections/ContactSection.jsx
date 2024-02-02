import styles from '@/styles/ContactSection.module.css'

import Section from '@/components/Section'

export default async function ContactSection({ id, dictionary }) {
  const { title } = dictionary[id]
  return (
    <Section className={styles.base} id={id} background={false}>
      <h2>{title}</h2>
    </Section>
  )
}
