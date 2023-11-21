import styles from '#/styles/Icon.module.css'

function Icon({ className = '', contentColor, icon, ...props }) {
  const Icon = icon

  return (
    icon && (
      <Icon
        className={`${styles.base} ${contentColor ? 'content-color' : ''} ${className}`}
        {...props}
      />
    )
  )
}

export default Icon
