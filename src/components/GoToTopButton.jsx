import styles from '@/styles/GoToTopButton.module.css'

import Link from '@/components/Link'
import getDictionary from 'i18n/server'

export default async function GoToTopButton() {
  const { aria } = await getDictionary()

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
