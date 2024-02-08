'use client'

import styles from '@/styles/IconButton.module.css'

import Icon from '@/components/Icon'
import clsx from 'clsx/lite'

export default function IconButton({
  as: Tag = 'button',
  className,
  title,
  onClick,
  src,
  iconProps,
  ...props
}) {
  props = Tag === 'button' ? { type: 'button', title, onClick } : props

  return (
    <Tag className={clsx(className, styles.base)} {...props}>
      <Icon src={src} scaleAnimation {...iconProps} />
    </Tag>
  )
}
