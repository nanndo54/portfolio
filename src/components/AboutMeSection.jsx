import styles from '@/styles/AboutMeSection.module.css'

import ImageCarrousel from '@/components/ImageCarrousel'
import Section from '@/components/Section'
import images from '@/constants/images'

export default async function AboutMeSection({ id, dictionary }) {
  const subsections = [
    {
      images: images.aboutMe.guatemala,
      text: dictionary.text2
    },
    {
      images: images.aboutMe.usac,
      text: dictionary.text3
    }
  ]

  return (
    <Section id={id}>
      <h2>{dictionary.title}</h2>
      <p>{dictionary.text1}</p>
      {subsections.map(({ images, text }, i) => (
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
