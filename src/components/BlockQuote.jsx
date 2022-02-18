import { FormattedMessage } from 'react-intl'
import styles from '@/styles/BlockQuote.module.css'

function BlockQuote({ quote, author = 'Anonymous' }) {
  return (
    <blockquote className={styles.base}>
      <span className={styles.quote}>“</span>
      <FormattedMessage id={quote} />
      <span className={styles.quote}>”</span>
      <div className={styles.author}>— {author}</div>
    </blockquote>
  )
}

export default BlockQuote
