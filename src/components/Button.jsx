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
  children,
  ...props
}) {
  const childrenElement = (
    <>
      {children}
      {icon && <Icon src={icon} className={styles.icon} />}
    </>
  )

  return href ? (
    <Link
      className={`${className} ${classNameByType[type]} ${styles.base}`}
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
