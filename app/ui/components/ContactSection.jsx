import styles from '#/styles/ContactSection.module.css'

import Section from '#/components/Section'

export default async function ContactSection({ id, dictionary }) {
  return (
    <Section className={styles.base} id={id} background={false}>
      <h1>{dictionary.title}</h1>
    </Section>
  )
}
