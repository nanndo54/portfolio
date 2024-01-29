import styles from '@/styles/ContactIcons.module.css'

import IconButton from '@/components/IconButton'
import contacts from '@/constants/contacts'

export default async function ContactIcons({ tabIndex }) {
  return (
    <nav className={styles.base}>
      {contacts.map(({ name, icon, url, props }) => (
        <IconButton
          key={name}
          icon={icon}
          iconProps={{ ...props, border: true }}
          aria-label={name}
          href={url}
          tabIndex={tabIndex}
        />
      ))}
    </nav>
  )
}
