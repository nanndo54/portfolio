import Section from '#/components/Section'
import Text from '#/components/Text'
import styles from '#/styles/BlockQuote.module.css'

export default async function BlockQuote({ quote, author }) {
  return (
    <Section as='blockquote' className={`${styles.base} blur-background`}>
      <span>
        <span className={styles.quote}>“</span>
        <Text localeId={quote} />
        <span className={styles.quote}>”</span>
      </span>
      <div className={styles.author}>— {author}</div>
    </Section>
  )
}
