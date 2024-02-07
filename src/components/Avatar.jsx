import Icon from '@/components/Icon'
import Image from '@/components/Image'
import { logoIcon } from '@/constants/icons'
import styles from '@/styles/Avatar.module.css'
import clsx from 'clsx/lite'

export default async function Avatar({ photo }) {
  // const handleMenuButton = () => {
  //   const squeakAudio = new Audio('/static/landing/squeak.mp3')
  //   squeakAudio.volume = 0.3
  //   squeakAudio.play()
  // }

  return (
    <button type='button' className={styles.base}>
      <Icon className={styles.icon} src={logoIcon} />
      <Icon className={clsx(styles.icon, styles.front)} src={logoIcon} />
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
