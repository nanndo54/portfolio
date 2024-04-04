'use client'

import styles from '@/styles/Button.module.css'

import clsx from 'clsx/lite'

const classNameByVariant = {
  primary: `${styles.primary} interactive-button-primary`,
  secondary: `${styles.secondary} interactive-border`
}

export default function Button({
  className,
  type = 'button',
  variant,
  onClick,
  children,
  disabled = false,
  loading = false,
  ...props
}) {
  return (
    <button
      className={clsx(
        className,
        styles.base,
        classNameByVariant[variant],
        disabled && styles.disabled,
        loading && styles.loading,
        'no-select'
      )}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </button>
  )
}
