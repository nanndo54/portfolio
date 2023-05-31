import styles from '#styles/Button.module.css'

function Button({ className = '', children, ...props }) {
  return (
    <div className={`${className} ${styles.base}`} {...props}>
      <button className={styles.button}>{children}</button>
    </div>
  )
}

export default Button
