import Icon from '@/components/Icon'
import Image from '@/components/Image'
import { logoIcon } from '@/constants/icons'
import images from '@/constants/images'
import styles from '@/styles/Avatar.module.css'

export default async function Avatar() {
  // const handleMenuButton = () => {
  //   const squeakAudio = new Audio('/static/landing/squeak.mp3')
  //   squeakAudio.volume = 0.3
  //   squeakAudio.play()
  // }

  return (
    <div className={styles.base}>
      <Icon className={styles.icon} src={logoIcon} alt='logo' priority />
      <Image
        className={styles.picture}
        {...images.landing.profilePhoto}
        border
        priority
        zoom={false}
      />
    </div>
  )
}
