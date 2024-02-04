'use client'

import styles from '@/styles/GoToTopButton.module.css'

import Link from '@/components/Link'
import useAriaLabel from '@/hooks/useAriaLabel'

export default function GoToTopButton() {
  const [ariaGoToTop] = useAriaLabel('goToTop')

  return (
    <Link href='#landing' className={styles.base} aria-label={ariaGoToTop}>
      <div className={styles.icon}>
        <div className={styles.dot1} />
        <div className={styles.dot2} />
        <div className={styles.dot3} />
      </div>
    </Link>
  )
}
