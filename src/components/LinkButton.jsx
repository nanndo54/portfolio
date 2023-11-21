import styles from '#/styles/Button.module.css'

import Icon from '#/components/Icon'

const classNameByType = {
  primary: '',
  secondary: styles.secondary,
  tertiary: styles.tertiary
}

function LinkButton({
  className = '',
  type = 'primary',
  href,
  icon,
  children,
  ...props
}) {
  return (
    <a
      target='_blank'
      rel='noreferrer'
      href={href}
      className={`${className} ${classNameByType[type]} ${styles.base}`}
      {...props}
    >
      {children}
      <Icon icon={icon} className={styles.icon} />
    </a>
  )
}

export default LinkButton
