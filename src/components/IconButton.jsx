import styles from '@/styles/IconButton.module.css'

import Icon from '@/components/Icon'
import Link from '@/components/Link'
import clsx from 'clsx/lite'

export default function IconButton({
  className = '',
  href,
  'aria-label': ariaLabel,
  tabIndex,
  onClick,
  src,
  ...props
}) {
  const childrenElement = <Icon src={src} scaleAnimation {...props} />

  return href ? (
    <Link
      className={clsx(className, styles.base)}
      href={href}
      isExternal
      noDecoration
      aria-label={ariaLabel}
      tabIndex={tabIndex}
    >
      {childrenElement}
    </Link>
  ) : (
    <button
      type='button'
      className={clsx(className, styles.base)}
      onClick={onClick}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
    >
      {childrenElement}
    </button>
  )
}
