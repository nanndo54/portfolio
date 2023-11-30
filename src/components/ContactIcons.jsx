import styles from '#/styles/ContactIcons.module.css'
import Icon from '#/components/Icon'
import contacts from '#/constants/contacts'

function ContactIcons({ className = '', tabIndex }) {
  return (
    <nav className={`${styles.base} ${className}`}>
      {contacts.map(({ name, icon, url, props }) => (
        <a
          key={name}
          title={name}
          target='_blank'
          rel='noreferrer'
          href={url}
          tabIndex={tabIndex}
        >
          <Icon src={icon} {...props} />
        </a>
      ))}
    </nav>
  )
}

export default ContactIcons
