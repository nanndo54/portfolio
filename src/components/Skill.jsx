'use client'

import styles from '@/styles/Skill.module.css'

import IconButton from '@/components/IconButton'
import useAppStore from '@/state/store'

const classNameBySize = {
  small: styles.small
}

export default function Skill({ size = 'medium', name, icon, props }) {
  const className = `${styles.base} ${classNameBySize[size] || ''}`
  const { openShowcase } = useAppStore()

  return (
    <div className={className}>
      <IconButton
        icon={icon}
        iconProps={props}
        className={styles.icon}
        title={name}
        onClick={() =>
          openShowcase({
            images: [{ src: icon, alt: name, icon: true }]
          })
        }
      />
      {size !== 'small' && <span>{name}</span>}
    </div>
  )
}
