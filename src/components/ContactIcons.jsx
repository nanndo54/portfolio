import useContacts from '#/hooks/useContacts'
import styles from '#/styles/ContactIcons.module.css'

function ContactIcons({ className = '', tabIndex }) {
  const contacts = useContacts()

  return (
    <nav className={`${styles.base} ${className}`}>
      {contacts.map(({ name, icon, url }) => (
        <a
          key={name}
          title={name}
          target='_blank'
          rel='noreferrer'
          href={url}
          tabIndex={tabIndex}
        >
          {icon}
        </a>
      ))}
    </nav>
  )
}

export default ContactIcons
