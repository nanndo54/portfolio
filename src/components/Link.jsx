import buttonStyles from '@/styles/Button.module.css'
import styles from '@/styles/Link.module.css'
import clsx from 'clsx/lite'
import { default as NextLink } from 'next/link'

const classNameByVariant = {
  primary: `${buttonStyles.primary} interactive-button-primary`,
  secondary: `${buttonStyles.secondary} interactive-button-secondary`
}

export default async function Link({
  className,
  title,
  href = '#',
  locale,
  replace = false,
  prefetch = false,
  isExternal = false,
  decoration = true,
  children,
  asButton = false,
  variant,
  ...props
}) {
  return (
    <NextLink
      replace={replace}
      prefetch={prefetch}
      className={clsx(
        className,
        asButton ? buttonStyles.base : styles.base,
        asButton && 'no-select',
        classNameByVariant[variant],
        decoration && styles.decoration
      )}
      title={title}
      href={href}
      locale={locale}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? ' noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </NextLink>
  )
}
