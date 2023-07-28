import styles from '#/styles/Button.module.css'

function Button({ className = '', children, tabIndex, ...props }) {
  return (
    <div className={`${className} ${styles.base}`} {...props}>
      <button className={styles.button} tabIndex={tabIndex}>
        {children}
      </button>
    </div>
  )
}

export default Button
