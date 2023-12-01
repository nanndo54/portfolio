import styles from '#/styles/Icon.module.css'

function Icon({ className = '', contentColor, src: IconComponent, ...props }) {
  return (
    <IconComponent
      className={`${styles.base} ${contentColor ? styles.contentColor : ''} ${className}`}
      {...props}
    />
  )
}

export default Icon
