import styles from '#/styles/AboutMeSection.module.css'

import Image from '#/components/Image'
import Section from '#/components/Section'
import images from '#/constants/images'

export default async function AboutMeSection({ id, dictionary }) {
  return (
    <Section id={id}>
      <h2>{dictionary.title}</h2>
      <p>{dictionary.text1}</p>
      <div className={styles.subsection}>
        <Image {...images.aboutMe.guatemala} />
        <p>{dictionary.text2}</p>
      </div>
      <div className={styles.subsection}>
        <Image {...images.aboutMe.campus} />
        <p>{dictionary.text3}</p>
      </div>
    </Section>
  )
}
