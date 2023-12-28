import styles from '#/styles/Icon.module.css'

function Icon({ className = '', contentColor, src: Icon, ...props }) {
  return (
    Icon && (
      <Icon
        className={`${styles.base} ${
          contentColor ? styles.contentColor : ''
        } ${className}`}
        {...props}
      />
    )
  )
}

export default Icon
