import styles from '@/styles/Button.module.css'

import Link from '@/components/Link'
import clsx from 'clsx/lite'

const classNameByType = {
  secondary: styles.secondary,
  tertiary: styles.tertiary
}

export default async function Button({
  className = '',
  type = 'primary',
  href,
  onClick,
  children,
  ...props
}) {
  return href ? (
    <Link
      className={clsx(className, styles.base, classNameByType[type])}
      href={href}
      noDecoration
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button
      type='button'
      className={clsx(className, styles.base, classNameByType[type])}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
