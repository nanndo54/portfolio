import { FormattedMessage } from 'react-intl'
import styles from '@/styles/BlockQuote.module.css'
import Section from '@/components/Section'

function BlockQuote({ quote, author }) {
  return (
    <Section as='blockquote' className={styles.base}>
      <span>
        <span className={styles.quote}>“</span>
        <FormattedMessage id={quote} />
        <span className={styles.quote}>”</span>
      </span>
      <div className={styles.author}>— {author}</div>
    </Section>
  )
}

export default BlockQuote
