'use client'

import Icon from '@/components/Icon'
import Image from '@/components/Image'
import { logoIcon } from '@/constants/icons'
import images from '@/constants/images'
import useTopObserver from '@/hooks/useTopObserver'
import useAppStore from '@/state/store'
import styles from '@/styles/Avatar.module.css'

export default function Avatar() {
  const { isOnTop } = useAppStore()
  useTopObserver()

  const handleMenuButton = () => {
    if (isOnTop) return

    const squeakAudio = new Audio('/static/landing/squeak.mp3')
    squeakAudio.volume = 0.3
    squeakAudio.play()
  }

  return (
    <div className={styles.base}>
      <button
        type='button'
        onClick={(ev) => handleMenuButton(ev.target.value)}
        tabIndex={isOnTop ? -1 : 0}
      >
        <Icon className={styles.icon} src={logoIcon} alt='logo' priority />
        <Image
          className={styles.picture}
          {...images.landing.profilePhoto}
          priority
          noZoom
        />
      </button>
    </div>
  )
}
