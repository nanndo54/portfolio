import styles from '#/styles/ContactIcons.module.css'

import Icon from '#/components/Icon'

import IconButton from '#/components/IconButton'
import contacts from '#/constants/contacts'

export default async function ContactIcons({ tabIndex }) {
  return (
    <nav className={styles.base}>
      {contacts.map(({ name, icon, url, props }) => (
        <IconButton key={name} aria-label={name} href={url} tabIndex={tabIndex}>
          <Icon src={icon} {...props} />
        </IconButton>
      ))}
    </nav>
  )
}
