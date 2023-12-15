import styles from '#/styles/GoToTopButton.module.css'

import Text from '#/components/Text'
import useAppStore from '#/state/store'

function GoToTopButton() {
  const { isOnTop } = useAppStore()

  return (
    <a
      href='#welcome'
      className={`${styles.base} ${isOnTop ? '' : styles.show}`}
      tabIndex={isOnTop ? -1 : 0}
    >
      <div className={styles.icon}>
        <div className={styles.dot1} />
        <div className={styles.dot2} />
        <div className={styles.dot3} />
      </div>
      <Text as='p' localeId='goto.start' />
    </a>
  )
}

export default GoToTopButton
