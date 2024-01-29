import styles from '@/styles/Skill.module.css'

import Icon from '@/components/Icon'
import OpenShowcase from '@/components/OpenShowcase'

export default async function Skill({
  size = 'medium',
  name,
  icon,
  props,
  showcaseProps
}) {
  return (
    <OpenShowcase
      className={styles.base}
      images={[{ src: icon, alt: name, icon: true, props: showcaseProps }]}
    >
      <Icon className={styles.icon} border src={icon} title={name} {...props} />
      {size !== 'small' && <span>{name}</span>}
    </OpenShowcase>
  )
}
