import styles from '#/styles/GoToTopButton.module.css'

import scrollToTop from '#/utilities/scrollToTop'
import Text from '#/components/Text'
import useAppStore from '#/state/store'

function GoToTopButton() {
  const { isOnTop } = useAppStore()

  return (
    <button
      type='button'
      className={`${styles.base} ${isOnTop ? '' : styles.show}`}
      onClick={scrollToTop}
      tabIndex={isOnTop ? -1 : 0}
    >
      <div className={styles.icon}>
        <div className={styles.dot1} />
        <div className={styles.dot2} />
        <div className={styles.dot3} />
      </div>
      <Text as='p' localeId='goto.start' />
    </button>
  )
}

export default GoToTopButton
