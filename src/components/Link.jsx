'use client'

import styles from '@/styles/Link.module.css'
import clsx from 'clsx/lite'
import { default as NextLink } from 'next/link'

export default function Link({
  className = '',
  href = '#',
  'aria-label': ariaLabel,
  replace = false,
  locale,
  isExternal = false,
  children,
  noDecoration = false,
  ...props
}) {
  return (
    <NextLink
      prefetch={false}
      className={clsx(className, styles.base, noDecoration && styles.noDecoration)}
      href={href}
      aria-label={ariaLabel}
      replace={replace}
      locale={locale}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? ' noopener noreferrer' : ''}
      {...props}
    >
      {children}
    </NextLink>
  )
}
