import styles from '@/styles/AboutMeSection.module.css'

import ImageCarrousel from '@/components/ImageCarrousel'
import Section from '@/components/Section'

export default async function AboutMeSection({ id, dictionary }) {
  const { title, text, list } = dictionary

  return (
    <Section id={id}>
      <h2>{title}</h2>
      <p>{text}</p>
      {list.map(({ images, text }, i) => (
        <div key={i} className={styles.subsection}>
          <ImageCarrousel
            className={styles.images}
            border
            images={images}
            height={171}
            width={256}
          />
          <p>{text}</p>
        </div>
      ))}
    </Section>
  )
}
