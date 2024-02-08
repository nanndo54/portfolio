'use client'

import styles from '@/styles/Button.module.css'

import clsx from 'clsx/lite'

const classNameByVariant = {
  secondary: styles.secondary,
  tertiary: styles.tertiary
}

export default function Button({
  as: Tag = 'button',
  className,
  variant = 'primary',
  onClick,
  children,
  ...props
}) {
  return (
    <Tag
      type='button'
      className={clsx(
        className,
        styles.base,
        classNameByVariant[variant],
        'scale-animation'
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </Tag>
  )
}
