import styles from '@/styles/Section.module.css'
import clsx from 'clsx/lite'

export default async function Section({
  background = true,
  as: Tag = 'section',
  className,
  id,
  title,
  children
}) {
  return (
    <Tag
      id={id}
      className={clsx(className, styles.base, background && styles.background)}
    >
      {title && <h2 className='interactive-text'>{title}</h2>}
      {children}
    </Tag>
  )
}
