import Section from '@/components/Section'
import styles from '@/styles/BlockQuote.module.css'

export default async function BlockQuote({ dictionary }) {
  return (
    <Section as='blockquote' className={`${styles.base} blur-background`}>
      <span>
        <span className={styles.quote}>“</span>
        {dictionary.text}
        <span className={styles.quote}>”</span>
      </span>
      <div className={styles.author}>— {dictionary.author}</div>
    </Section>
  )
}
