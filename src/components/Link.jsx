import buttonStyles from '@/styles/Button.module.css'
import styles from '@/styles/Link.module.css'
import clsx from 'clsx/lite'
import { default as NextLink } from 'next/link'

const classNameByVariant = {
  primary: '',
  secondary: `${buttonStyles.secondary} blur-background`
}

export default async function Link({
  className,
  title,
  href = '#',
  locale,
  replace = false,
  isExternal = false,
  decoration = true,
  children,
  asButton = false,
  variant,
  ...props
}) {
  return (
    <NextLink
      prefetch={false}
      className={clsx(
        className,
        asButton ? buttonStyles.base : styles.base,
        classNameByVariant[variant],
        decoration && styles.decoration
      )}
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
