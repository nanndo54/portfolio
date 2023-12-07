import styles from '#/styles/Skill.module.css'

import Icon from '#/components/Icon'
import useAppStore from '#/state/store'

const classNameBySize = {
  small: styles.small
}

function Skill({ size = 'medium', name, icon, props }) {
  const className = `${styles.base} ${classNameBySize[size] || ''}`
  const { openShowcase } = useAppStore()

  const iconElement = <Icon src={icon} alt={name} {...props} />

  return (
    <div className={className}>
      <button
        className={styles.icon}
        title={name}
        onClick={() => openShowcase({ element: iconElement })}
      >
        {iconElement}
      </button>
      {size !== 'small' && <span>{name}</span>}
    </div>
  )
}

export default Skill
