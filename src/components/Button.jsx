import styles from '#/styles/Button.module.css'

import Icon from '#/components/Icon'

function Button({ className = '', icon, children, ...props }) {
  return (
    <button type='button' className={`${className} ${styles.base}`} {...props}>
      {children}
      <Icon icon={icon} className={styles.icon} />
    </button>
  )
}

export default Button
