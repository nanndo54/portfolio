import styles from '@/styles/ContactIcons.module.css'

import IconButton from '@/components/IconButton'
import Link from '@/components/Link'

export default async function ContactIcons({ links, tabIndex }) {
  return (
    <nav className={styles.base}>
      {links.map(({ name, icon, url, props }) => (
        <IconButton
          key={name}
          as={Link}
          src={icon}
          iconProps={{
            border: true,
            priority: true
          }}
          title={name}
          href={url}
          tabIndex={tabIndex}
          {...props}
        />
      ))}
    </nav>
  )
}
