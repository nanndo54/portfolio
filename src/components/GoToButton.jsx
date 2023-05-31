import styles from '@/styles/GoToButton.module.css'
import { useRef } from 'react'
import { FormattedMessage } from 'react-intl'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'

const handleScroll = (ev, direction = 'down') => {
  const base = document.getElementById('base')
  const coords = ev.currentTarget.getBoundingClientRect()
  const top = direction === 'down' ? base.scrollTop + coords.y + 120 : 0

  base.scrollTo({
    top,
    behavior: 'smooth'
  })
}

function GoToButton({ direction = 'down', label }) {
  label = (
    <p>
      <FormattedMessage id={label} />
    </p>
  )

  const ref = useRef(null)
  const isIntersected = useIntersectionObserver(ref, {
    once: false,
    threshold: 0.75
  })

  return (
    <button
      className={`${styles.base} ${direction === 'up' ? styles.up : ''} ${
        isIntersected ? styles.arrow : ''
      }`}
      ref={ref}
      onClick={(ev) => handleScroll(ev, direction)}
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
