import RichText from '@/components/RichText'
import Section from '@/components/Section'
import styles from '@/styles/QuoteSection.module.css'
import clsx from 'clsx/lite'
import getDictionary from 'i18n/server'

export default async function QuoteSection({ id }) {
  const dictionary = await getDictionary(id)

  const { text, author } = dictionary

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
