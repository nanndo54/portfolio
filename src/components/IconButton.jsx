'use client'

import styles from '@/styles/IconButton.module.css'

import Icon from '@/components/Icon'
import clsx from 'clsx/lite'

export default function IconButton({
  className,
  title,
  onClick,
  src,
  iconProps,
  ...props
}) {
  return (
    <button
      className={clsx(className, styles.base)}
      type='button'
      title={title}
      onClick={onClick}
      {...props}
    >
      <Icon src={src} {...iconProps} />
    </button>
  )
}
