import Image from '@/components/Image'
import styles from '@/styles/Avatar.module.css'
import clsx from 'clsx/lite'

import LogoIcon from 'public/static/icons/landing/logo-icon.svg'

export default async function Avatar({ photo }) {
  // const handleMenuButton = () => {
  //   const squeakAudio = new Audio('/static/landing/squeak.mp3')
  //   squeakAudio.volume = 0.3
  //   squeakAudio.play()
  // }

  return (
    <button type='button' className={styles.base}>
      <LogoIcon className={styles.icon} />
      <LogoIcon className={clsx(styles.icon, styles.front)} />
      <Image
        className={styles.picture}
        {...photo}
        height={208}
        width={208}
        border
        priority
        zoom={false}
      />
    </button>
  )
}
