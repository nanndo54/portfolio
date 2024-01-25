import styles from '@/styles/IconButton.module.css'

import Icon from '@/components/Icon'
import Link from '@/components/Link'
import clsx from 'clsx'

export default function IconButton({
  className = '',
  noBorder = false,
  href,
  onClick,
  icon,
  iconProps = {},
  ...props
}) {
  const childrenElement = <Icon src={icon} {...iconProps} />

  return href ? (
    <Link
      className={clsx(className, styles.base)}
      href={href}
      isExternal
      noDecoration
      {...props}
    >
      {childrenElement}
    </Link>
  ) : (
    <button
      type='button'
      className={clsx(className, styles.base, noBorder && styles.noBorder)}
      onClick={onClick}
      {...props}
    >
      {childrenElement}
    </button>
  )
}
