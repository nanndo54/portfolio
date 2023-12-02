import styles from '#/styles/Button.module.css'

import Icon from '#/components/Icon'

const classNameByType = {
  primary: '',
  secondary: styles.secondary,
  tertiary: styles.tertiary
}

function Button({
  className = '',
  type = 'primary',
  href,
  onClick,
  icon,
  children,
  ...props
}) {
  const childrenElement = (
    <>
      {children}
      {icon && <Icon src={icon} className={styles.icon} />}
    </>
  )

  const isExternLink = href?.startsWith('http')

  return href ? (
    <a
      className={`${className} ${classNameByType[type]} ${styles.base}`}
      target={isExternLink ? '_blank' : undefined}
      rel={isExternLink ? 'noreferrer' : undefined}
      href={href}
      {...props}
    >
      {childrenElement}
    </a>
  ) : (
    <button
      className={`${className} ${classNameByType[type]} ${styles.base}`}
      type='button'
      onClick={onClick}
      {...props}
    >
      {childrenElement}
    </button>
  )
}

export default Button
