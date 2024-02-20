import styles from '@/styles/Skill.module.css'

import Hint from '@/components/Hint'
import Icon from '@/components/Icon'
import OpenShowcase from '@/components/OpenShowcase'

export default async function Skill({ icon, type, name, props, showcaseProps }) {
  return (
    <OpenShowcase
      className={styles.base}
      images={[{ src: icon, alt: name, icon: true, props: showcaseProps }]}
    >
      <Hint position='bottom' label={name}>
        <Icon
          className={styles.icon}
          src={icon}
          type={type}
          border
          interactive
          scaleAnimation
          {...props}
        />
      </Hint>
    </OpenShowcase>
  )
}
