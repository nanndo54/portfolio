import styles from '#/styles/Icon.module.css'

function Icon({ className = '', contentColor, lightColor, src: Icon, ...props }) {
  return (
    Icon && (
      <Icon
        className={`${styles.base} ${contentColor ? styles.contentColor : ''} ${
          lightColor ? styles.lightColor : ''
        } ${className}`}
        {...props}
      />
    )
  )
}

export default Icon
