import styles from '#/styles/Button.module.css'

import Link from '#/components/Link'

const classNameByType = {
  primary: '',
  secondary: styles.secondary,
  tertiary: styles.tertiary
}

function Button({ className = '', type = 'primary', href, onClick, children, ...props }) {
  return href ? (
    <Link
      className={`${styles.base} ${className} ${classNameByType[type]}`}
      href={href}
      noDecoration
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button
      type='button'
      className={`${className} ${classNameByType[type]} ${styles.base}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
