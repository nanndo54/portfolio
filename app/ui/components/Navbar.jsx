import styles from '#/styles/Navbar.module.css'

import NavbarButtons from '#/components/NavbarButtons'
import NavbarLinks from '#/components/NavbarLinks'

export default function Navbar() {
  return (
    <nav className={styles.base}>
      <NavbarButtons />
      <NavbarLinks />
    </nav>
  )
}
