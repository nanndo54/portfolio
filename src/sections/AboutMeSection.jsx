import styles from '@/styles/AboutMeSection.module.css'

import ImageCarrousel from '@/components/ImageCarrousel'
import Section from '@/components/Section'
import getDictionary from 'i18n/server'

export default async function AboutMeSection({ id }) {
  const dictionary = await getDictionary(id)

  const { title, text, list: subsections } = dictionary

  return (
    <Section id={id}>
      <h2>{title}</h2>
      <p>{text}</p>
      {subsections.map(({ images, text }, i) => (
        <div key={i} className={styles.subsection}>
          <p>{text}</p>
          <ImageCarrousel
            className={styles.images}
            border
            images={images}
            height={171}
            width={256}
          />
        </div>
      ))}
    </Section>
  )
}
