import styles from '@/styles/AboutMeSection.module.css'

import Image from '@/components/Image'
import Section from '@/components/Section'
import images from '@/constants/images'

export default async function AboutMeSection({ id, dictionary }) {
  const subsections = [
    {
      image: images.aboutMe.guatemala,
      text: dictionary.text2
    },
    {
      image: images.aboutMe.campus,
      text: dictionary.text3
    }
  ]

  return (
    <Section id={id}>
      <h2>{dictionary.title}</h2>
      <p>{dictionary.text1}</p>
      {subsections.map(({ image, text }, i) => (
        <div key={i} className={styles.subsection}>
          <Image {...image} />
          <p>{text}</p>
        </div>
      ))}
    </Section>
  )
}
