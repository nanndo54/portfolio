import styles from '#/styles/GoToTopButton.module.css'

import Text from '#/components/Text'
import useAppStore from '#/state/store'
import Link from '#/components/Link'

function GoToTopButton() {
  const { isOnTop } = useAppStore()

  return (
    <Link href='#welcome' className={styles.base} tabIndex={isOnTop ? -1 : 0}>
      <div className={styles.icon}>
        <div className={styles.dot1} />
        <div className={styles.dot2} />
        <div className={styles.dot3} />
      </div>
      <Text as='p' localeId='goto.start' className={styles.label} />
    </Link>
  )
}

export default GoToTopButton
