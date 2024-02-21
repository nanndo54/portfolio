import styles from '@/styles/Skill.module.css'

import Hint from '@/components/Hint'
import Icon from '@/components/Icon'
import OpenShowcase from '@/components/OpenShowcase'

export default async function Skill({
  icon,
  type,
  name,
  contrast = false,
  interactive = false,
  hintPosition = 'bottom'
}) {
  return (
    <OpenShowcase
      className={styles.base}
      images={[{ src: icon, alt: name, icon: true, contrast }]}
    >
      <Hint position={hintPosition} label={name}>
        <Icon
          className={styles.icon}
          src={icon}
          type={type}
          interactive={interactive}
          foregroundColor={contrast}
          border
          scaleAnimation
        />
      </Hint>
    </OpenShowcase>
  )
}
