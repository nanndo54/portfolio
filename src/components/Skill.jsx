import styles from '#/styles/Skill.module.css'

import Icon from '#/components/Icon'
import useAppStore from '#/store'

const classNameBySize = {
  small: styles.small
}

function Skill({ size = 'medium', name, icon, props }) {
  const className = `${styles.base} ${classNameBySize[size] || ''}`
  const { openShowcase } = useAppStore()

  return (
    <div className={className}>
      <button
        className={styles.icon}
        title={size === 'small' ? name : ''}
        onClick={() => openShowcase({ component: icon, alt: name })}
      >
        <Icon src={icon} alt={name} {...props} />
      </button>
      {size !== 'small' && <span>{name}</span>}
    </div>
  )
}

export default Skill
