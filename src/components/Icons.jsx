import contacts from '@/constants/contacts'
import styles from '@/styles/Icons.module.css'

function Icons() {
  return (
    <nav className={styles.base}>
      {contacts.map(({ name, icon, url }) => (
        <a key={name} target='_blank' rel='noreferrer' href={url}>
          <img src={icon} alt={name} />
        </a>
      ))}
    </nav>
  )
}

export default Icons
