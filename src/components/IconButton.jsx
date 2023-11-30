import styles from '#/styles/IconButton.module.css'

import Icon from '#/components/Icon'

function IconButton({ className = '', icon, noBorder = false, onClick, ...props }) {
  return (
    <button
      className={`${className} ${styles.base} ${noBorder ? styles.noBorder : ''}`}
      onClick={onClick}
    >
      <Icon src={icon} className={styles.icon} {...props} />
    </button>
  )
}

export default IconButton
