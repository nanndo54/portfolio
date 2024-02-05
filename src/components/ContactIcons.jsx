import styles from '@/styles/ContactIcons.module.css'

import IconButton from '@/components/IconButton'

export default async function ContactIcons({ links, tabIndex }) {
  return (
    <nav className={styles.base}>
      {links.map(({ name, icon, url, props }) => (
        <IconButton
          key={name}
          src={icon}
          border
          scaleAnimation
          title={name}
          href={url}
          tabIndex={tabIndex}
          priority
          {...props}
        />
      ))}
    </nav>
  )
}
