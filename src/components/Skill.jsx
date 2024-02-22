import styles from '@/styles/Skill.module.css'

import Icon from '@/components/Icon'
import OpenShowcase from '@/components/OpenShowcase'
import clsx from 'clsx/lite'

export default async function Skill({
  className,
  icon,
  type,
  name,
  contrast = false,
  interactive = false
}) {
  return (
    <OpenShowcase
      className={clsx(className, styles.base)}
      images={[{ src: icon, alt: name, icon: true, contrast }]}
    >
      <Icon
        className={styles.icon}
        src={icon}
        type={type}
        interactive={interactive}
        hint={name}
        foregroundColor={contrast}
        border
        scaleAnimation
      />
    </OpenShowcase>
  )
}
