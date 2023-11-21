import styles from '#/styles/GoToButton.module.css'
import { useRef } from 'react'

import useIntersectionObserver from '#/hooks/useIntersectionObserver'
import { handleScrollToTop } from '#/utilities/scroll'
import Text from '#/components/Text'

function GoToButton({ direction = 'down', label }) {
  label = <Text as={'p'} id={label} />

  const ref = useRef(null)
  const isIntersected = useIntersectionObserver(ref, {
    once: false,
    threshold: 0.75
  })

  return (
    <button
      type='button'
      className={`${styles.base} ${direction === 'up' ? styles.up : ''} ${
        isIntersected ? styles.arrow : ''
      }`}
      ref={ref}
      onClick={handleScrollToTop}
    >
      {direction === 'up' && label}
      <div className={styles.icon}>
        <div className={styles.dot1} />
        <div className={styles.dot2} />
        <div className={styles.dot3} />
      </div>
      {direction === 'down' && label}
    </button>
  )
}

export default GoToButton
