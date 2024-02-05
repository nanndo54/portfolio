'use client'

import Image from '@/components/Image'
import { logoIcon } from '@/constants/icons'
import styles from '@/styles/Avatar.module.css'
import clsx from 'clsx/lite'

import LogoIcon from 'public/static/icons/landing/logo-icon.svg'

export default function Avatar({ photo }) {
  const handleMenuButton = () => {
    const squeakAudio = new Audio('/static/landing/squeak.mp3')
    squeakAudio.volume = 0.3
    squeakAudio.play()
  }

  return (
    <button type='button' className={styles.base} onClick={handleMenuButton}>
      <LogoIcon className={styles.icon} src={logoIcon} />
      <LogoIcon className={clsx(styles.icon, styles.front)} src={logoIcon} />
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
