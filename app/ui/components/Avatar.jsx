'use client'

import Image from '#/components/Image'
import { LogoIcon } from '#/constants/icons'
import images from '#/constants/images'
import useTopObserver from '#/hooks/useTopObserver'
import useAppStore from '#/state/store'
import styles from '#/styles/Avatar.module.css'

export default function Avatar() {
  const { isOnTop } = useAppStore()
  useTopObserver()

  const handleMenuButton = () => {
    if (isOnTop) return

    const squeakAudio = new Audio('/landing/squeak.mp3')
    squeakAudio.volume = 0.3
    squeakAudio.play()
  }

  return (
    <div className={styles.avatar}>
      <button
        type='button'
        onClick={(ev) => handleMenuButton(ev.target.value)}
        tabIndex={isOnTop ? -1 : 0}
      >
        <LogoIcon width={80} />
        <Image {...images.landing.profilePhoto} priority noZoom />
      </button>
    </div>
  )
}
