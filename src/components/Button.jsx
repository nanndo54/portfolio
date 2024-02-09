'use client'

import styles from '@/styles/Button.module.css'

import clsx from 'clsx/lite'

const classNameByVariant = {
  primary: '',
  secondary: `${styles.secondary} blur-background`
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
