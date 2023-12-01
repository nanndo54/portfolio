import styles from '#/styles/IconButton.module.css'

import Icon from '#/components/Icon'

function IconButton({ className = '', icon, noBorder = false, onClick, ...props }) {
  return (
    <button
      type='button'
      className={`${className} ${styles.base} ${noBorder ? styles.noBorder : ''}`}
      onClick={onClick}
      {...props}
    >
      <Icon src={icon} className={styles.icon} />
    </button>
  )
}

export default IconButton
