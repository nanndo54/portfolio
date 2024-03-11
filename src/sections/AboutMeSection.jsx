import styles from '@/styles/AboutMeSection.module.css'

import ImageCarrousel from '@/components/ImageCarrousel'
import RichText from '@/components/RichText'
import Section from '@/components/Section'
import getDictionary from 'i18n/server'

export default async function AboutMeSection({ id }) {
  const dictionary = await getDictionary(id)

  const { title, content } = dictionary

  return (
    <Section id={id} title={title} className={styles.base}>
      {content.map(({ images, text }, i) => (
        <div key={i} className={styles.subsection}>
          <RichText as='p'>{text}</RichText>
          {images && (
            <ImageCarrousel
              className={styles.images}
              border
              images={images}
              height={171}
              width={256}
            />
          )}
        </div>
      ))}
    </Section>
  )
}
