'use client'

import styles from '#/styles/Link.module.css'
import { default as NextLink } from 'next/link'

export default function Link({
  className = '',
  href,
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
      className={`${className} ${styles.base} ${noDecoration ? styles.noDecoration : ''}`}
      href={href}
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
