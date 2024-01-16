import styles from '#/styles/IconButton.module.css'

import Icon from '#/components/Icon'
import Link from '#/components/Link'

function IconButton({
  className = '',
  noBorder = false,
  href,
  onClick,
  icon,
  children,
  ...props
}) {
  const childrenElement = icon ? <Icon src={icon} className={styles.icon} /> : children

  return href ? (
    <Link className={`${className} ${styles.base}`} href={href} {...props} noDecoration>
      {childrenElement}
    </Link>
  ) : (
    <button
      type='button'
      className={`${className} ${styles.base} ${noBorder ? styles.noBorder : ''}`}
      onClick={onClick}
      {...props}
    >
      {childrenElement}
    </button>
  )
}

export default IconButton
