import styles from '@/styles/Button.module.css'

function Button({ children, className = '', ...props }) {
  return (
    <div className={`${className} ${styles.base}`} {...props}>
      <button className={styles.button}>{children}</button>
    </div>
  )
}

export default Button
