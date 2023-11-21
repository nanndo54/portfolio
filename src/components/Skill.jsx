import Icon from '#/components/Icon'
import styles from '#/styles/Skill.module.css'

function Skill({ size = 'medium', name, icon, props }) {
  const className = `${styles.base} ${
    size === 'big' ? styles.big : size === 'small' ? styles.small : ''
  }`

  return (
    <div className={className}>
      <div className={styles.icon} title={size === 'small' ? name : ''}>
        <Icon icon={icon} alt={name} {...props} />
      </div>
      {size !== 'small' && <span>{name}</span>}
    </div>
  )
}

export default Skill
