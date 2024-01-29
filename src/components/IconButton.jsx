import styles from '@/styles/IconButton.module.css'

import Icon from '@/components/Icon'
import Link from '@/components/Link'
import clsx from 'clsx/lite'

export default function IconButton({
  className = '',
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
      className={clsx(className, styles.base)}
      onClick={onClick}
      {...props}
    >
      {childrenElement}
    </button>
  )
}
