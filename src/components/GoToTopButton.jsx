import styles from '@/styles/GoToTopButton.module.css'

import Link from '@/components/Link'

export default async function GoToTopButton() {
  return (
    <Link href='#landing' className={styles.base} aria-label='Ir al inicio'>
      <div className={styles.icon}>
        <div className={styles.dot1} />
        <div className={styles.dot2} />
        <div className={styles.dot3} />
      </div>
    </Link>
  )
}
