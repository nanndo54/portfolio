import styles from '@/styles/Section.module.css'
import clsx from 'clsx/lite'

export default async function Section({
  background = true,
  as: Tag = 'section',
  className = '',
  id,
  children
}) {
  return (
    <div className={styles.layout} id={id}>
      <Tag className={clsx(className, styles.base, background && styles.background)}>
        {children}
      </Tag>
    </div>
  )
}
