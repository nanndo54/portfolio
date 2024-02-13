import Image from '@/components/Image'
import styles from '@/styles/Avatar.module.css'
import clsx from 'clsx/lite'

export default async function Avatar({ className, photo }) {
  return (
    <div className={clsx(styles.base, className)}>
      <Image
        className={clsx(styles.img, 'interactive-aura')}
        {...photo}
        height={704}
        width={704}
        priority
        zoom={false}
      />
    </div>
  )
}
