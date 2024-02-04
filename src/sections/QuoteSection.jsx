import RichText from '@/components/RichText'
import Section from '@/components/Section'
import styles from '@/styles/QuoteSection.module.css'
import clsx from 'clsx/lite'

export default async function QuoteSection({ id, dictionary }) {
  const { text, author } = dictionary[id]

  return (
    <Section as='blockquote' className={clsx(styles.base, 'blur-background')}>
      <span>
        <sup>“</sup>
        <RichText>{text}</RichText>
        <sup>”</sup>
      </span>
      <div className={styles.author}>— {author}</div>
    </Section>
  )
}
