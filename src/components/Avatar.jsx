'use client'

import Icon from '@/components/Icon'
import Image from '@/components/Image'
import { logoIcon } from '@/constants/icons'
import useAppStore from '@/state/store'
import styles from '@/styles/Avatar.module.css'
import clsx from 'clsx/lite'

export default function Avatar({ photo }) {
  const { aria } = useAppStore((state) => state.dictionary)

  const handleMenuButton = () => {
    const squeakAudio = new Audio('/static/landing/squeak.mp3')
    squeakAudio.volume = 0.3
    squeakAudio.play()
  }

  return (
    <button type='button' className={styles.base} onClick={handleMenuButton}>
      <Icon className={styles.icon} src={logoIcon} alt='logo' priority />
      <Icon
        className={clsx(styles.icon, styles.front)}
        src={logoIcon}
        alt='logo'
        priority
      />
      <Image
        className={styles.picture}
        {...photo}
        height={240}
        width={240}
        border
        priority
        zoom={false}
      />
    </button>
  )
}
