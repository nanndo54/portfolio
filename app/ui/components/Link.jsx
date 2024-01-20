import styles from '#/styles/Link.module.css'
import { default as NextLink } from 'next/link'

export default function Link({
  className = '',
  href,
  children,
  noDecoration = false,
  ...props
}) {
  const isHashLink = href?.startsWith('#')

  return (
    <NextLink
      replace={isHashLink}
      className={`${className} ${styles.base} ${noDecoration ? styles.noDecoration : ''}`}
      href={href}
      target={isHashLink ? '_self' : '_blank'}
      rel='noopener noreferrer'
      {...props}
    >
      {children}
    </NextLink>
  )
}
