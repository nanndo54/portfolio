import Image from '@/components/Image'
import styles from '@/styles/Avatar.module.css'
import clsx from 'clsx/lite'

const positions = ['Web Developer', 'Designer', 'UI / UX']

export default async function Avatar({ className, image }) {
  return (
    <div className={styles.base}>
      <div className={clsx(styles.avatar, className, 'interactive-aura')}>
        <div className={styles.box} />
        <Image
          className={styles.img}
          {...image}
          height={304}
          width={304}
          quality={90}
          priority
          zoom={false}
        />
      </div>
      <div className={styles.band}>
        <div className={styles.positions}>
          {positions.map((position, index) => (
            <span key={index}>{position}</span>
          ))}
          {positions.map((position, index) => (
            <span key={index}>{position}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
