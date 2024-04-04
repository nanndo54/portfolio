import Image from '@/components/Image'
import styles from '@/styles/Avatar.module.css'
import clsx from 'clsx/lite'

export default async function Avatar({ className, photo }) {
  return (
    <div className={clsx(styles.base, className, 'interactive-aura')}>
      <div className={clsx(styles.box)} />
      <Image
        className={styles.img}
        {...photo}
        height={624}
        width={624}
        quality={80}
        priority
        zoom={false}
      />
    </div>
  )
}
