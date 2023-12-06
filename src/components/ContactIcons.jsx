import styles from '#/styles/ContactIcons.module.css'

import Icon from '#/components/Icon'

import contacts from '#/constants/contacts'
import IconButton from '#/components/IconButton'

function ContactIcons({ className = '', tabIndex }) {
  return (
    <nav className={`${styles.base} ${className}`}>
      {contacts.map(({ name, icon, url, props }) => (
        <IconButton key={name} aria-label={name} href={url} tabIndex={tabIndex}>
          <Icon src={icon} {...props} />
        </IconButton>
      ))}
    </nav>
  )
}

export default ContactIcons
