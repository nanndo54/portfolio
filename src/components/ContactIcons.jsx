import useContacts from '@/hooks/useContacts'
import styles from '@/styles/ContactIcons.module.css'

function ContactIcons({ className = '', disableFloat = false }) {
  const contacts = useContacts()

  return (
    <nav className={`${styles.base} ${className} ${disableFloat ? styles.nofloat : ''}`}>
      {contacts.map(({ name, icon, url, download = false }) => (
        <a key={name} target='_blank' rel='noreferrer' href={url} download={download}>
          <img src={icon} alt={name} />
        </a>
      ))}
    </nav>
  )
}

export default ContactIcons
