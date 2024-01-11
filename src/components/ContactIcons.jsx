import styles from '#/styles/ContactIcons.module.css'

import Icon from '#/components/Icon'

import contacts from '#/constants/contacts'
import IconButton from '#/components/IconButton'

function ContactIcons({ tabIndex }) {
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

export default ContactIcons
