import styles from '@/styles/Navbar.module.css'

import NavbarButtons from '@/components/NavbarButtons'
import NavbarLinks from '@/components/NavbarLinks'

export default async function Navbar() {
  return (
    <nav className={styles.base}>
      <NavbarLinks />
      <NavbarButtons />
    </nav>
  )
}
