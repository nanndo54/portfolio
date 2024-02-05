'use client'

import styles from '@/styles/Link.module.css'
import clsx from 'clsx/lite'
import { default as NextLink } from 'next/link'

export default function Link({
  className,
  title,
  href = '#',
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
      title={title}
      href={href}
      replace={replace}
      locale={locale}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? ' noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </NextLink>
  )
}
