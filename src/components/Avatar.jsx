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
        className={clsx(styles.img, 'border')}
        {...photo}
        height={352}
        width={352}
        priority
        zoom={false}
      />
    </div>
  )
}
