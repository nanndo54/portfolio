import styles from '#styles/Skill.module.css'

function Skill({ size = 'medium', name, image, invert = false }) {
  const className = `${styles.base} ${
    size === 'big' ? styles.big : size === 'small' ? styles.small : ''
  } ${invert ? styles.invert : ''}`

  return (
    <div className={className}>
      <div className={styles.icon} title={size === 'small' ? name : ''}>
        <img src={image} alt={name} />
      </div>
      {size !== 'small' && <span>{name}</span>}
    </div>
  )
}

export default Skill
