'use client'

import styles from '@/styles/IconButton.module.css'

import Icon from '@/components/Icon'
import Link from '@/components/Link'
import clsx from 'clsx/lite'

export default function IconLink({
  className,
  title,
  onClick,
  src,
  iconProps,
  ...props
}) {
  return (
    <Link
      className={clsx(className, styles.base)}
      title={title}
      onClick={onClick}
      isExternal
      decoration={false}
      {...props}
    >
      <Icon src={src} {...iconProps} />
    </Link>
  )
}
