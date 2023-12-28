import styles from '#/styles/Button.module.css'

import Icon from '#/components/Icon'
import Link from '#/components/Link'

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
  iconOnStart = false,
  children,
  ...props
}) {
  const childrenElement = (
    <>
      {icon && iconOnStart && <Icon src={icon} className={styles.icon} />}
      {children}
      {icon && !iconOnStart && <Icon src={icon} className={styles.icon} />}
    </>
  )

  return href ? (
    <Link
      className={`${styles.base} ${className} ${classNameByType[type]}`}
      href={href}
      noDecoration
      {...props}
    >
      {childrenElement}
    </Link>
  ) : (
    <button
      type='button'
      className={`${className} ${classNameByType[type]} ${styles.base}`}
      onClick={onClick}
      {...props}
    >
      {childrenElement}
    </button>
  )
}

export default Button
