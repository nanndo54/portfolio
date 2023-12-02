import styles from '#/styles/GoToTopButton.module.css'

import { handleScrollToTop } from '#/utilities/scroll'
import Text from '#/components/Text'
import useAppStore from '#/store'

function GoToTopButton() {
  const { isOnTop } = useAppStore()

  return (
    <button
      type='button'
      className={`${styles.base} ${isOnTop ? '' : styles.arrow}`}
      onClick={handleScrollToTop}
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
