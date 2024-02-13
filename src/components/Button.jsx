'use client'

import styles from '@/styles/Button.module.css'

import clsx from 'clsx/lite'

const classNameByVariant = {
  primary: `${styles.primary} interactive-button-primary`,
  secondary: `${styles.secondary} interactive-button-secondary`
}

export default function Button({
  className,
  variant = 'primary',
  onClick,
  children,
  ...props
}) {
  return (
    <button
      type='button'
      className={clsx(className, styles.base, classNameByVariant[variant])}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
