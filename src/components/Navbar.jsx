import styles from '@/styles/Navbar.module.css'

import NavbarButtons from '@/components/NavbarButtons'
import NavbarLinks from '@/components/NavbarLinks'
import sections from '@/constants/sections'

export default async function Navbar({ dictionary }) {
  const links = []

  for (const section of sections.filter(({ hideInNavbar }) => !hideInNavbar)) {
    const { id } = section
    const label = dictionary[id].title
    links.push({ id, label })
  }

  return (
    <nav className={styles.base}>
      <NavbarButtons />
      <NavbarLinks links={links} />
    </nav>
  )
}
