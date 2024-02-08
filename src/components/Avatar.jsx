import Image from '@/components/Image'
import styles from '@/styles/Avatar.module.css'
import clsx from 'clsx/lite'

export default async function Avatar({ className, photo }) {
  // const handleMenuButton = () => {
  //   const squeakAudio = new Audio('/static/landing/squeak.mp3')
  //   squeakAudio.volume = 0.3
  //   squeakAudio.play()
  // }

  return (
    <div className={clsx(styles.base, className)}>
      <Image
        className={styles.img}
        {...photo}
        height={1000}
        width={1000}
        priority
        zoom={false}
      />
      <div className={styles.back}>
        <Image {...photo} aria-hidden height={1000} width={1000} priority zoom={false} />
      </div>
    </div>
  )
}
