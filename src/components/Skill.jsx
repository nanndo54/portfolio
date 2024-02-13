import styles from '@/styles/Skill.module.css'

import Icon from '@/components/Icon'
import OpenShowcase from '@/components/OpenShowcase'

export default async function Skill({
  size = 'medium',
  icon,
  type,
  name,
  props,
  showcaseProps
}) {
  return (
    <OpenShowcase
      className={styles.base}
      images={[{ src: icon, alt: name, icon: true, props: showcaseProps }]}
    >
      <Icon
        className={styles.icon}
        src={icon}
        type={type}
        border
        interactive={true}
        scaleAnimation
        {...props}
      />
      {size !== 'small' && <span>{name}</span>}
    </OpenShowcase>
  )
}
