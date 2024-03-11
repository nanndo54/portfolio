import RichText from '@/components/RichText'
import Section from '@/components/Section'
import styles from '@/styles/QuoteSection.module.css'
import clsx from 'clsx/lite'
import getDictionary from 'i18n/server'

export default async function QuoteSection({ id }) {
  const dictionary = await getDictionary(id)

  const { text, author } = dictionary

  return (
    <Section as='blockquote' className={clsx(styles.base, 'interactive-border')}>
      <p className={clsx(styles.quote, 'interactive-text')}>
        <sup>“</sup>
        <RichText>{text}</RichText>
        <sup>”</sup>
      </p>
      <p className={clsx(styles.author, 'interactive-text')}>— {author}</p>
    </Section>
  )
}
