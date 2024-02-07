import styles from '@/styles/Navbar.module.css'

import NavbarButtons from '@/components/NavbarButtons'
import NavbarLinks from '@/components/NavbarLinks'
import sections from '@/constants/sections'
import getDictionary from 'i18n/server'

export default async function Navbar() {
  const dictionary = await getDictionary()

  const links = []

  for (const section of sections.filter(({ ignore }) => !ignore)) {
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
