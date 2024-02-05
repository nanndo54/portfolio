'use client'

import styles from '@/styles/GoToTopButton.module.css'

import Link from '@/components/Link'
import useAppStore from '@/state/store'

export default function GoToTopButton() {
  const { aria } = useAppStore((state) => state.dictionary)

  return (
    <Link href='#landing' className={styles.base} title={aria.goToTop}>
      <div className={styles.icon}>
        <div className={styles.dot1} />
        <div className={styles.dot2} />
        <div className={styles.dot3} />
      </div>
    </Link>
  )
}
