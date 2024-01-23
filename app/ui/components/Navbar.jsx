import styles from '#/styles/Navbar.module.css'

import NavbarButtons from '#/components/NavbarButtons'
import NavbarLinks from '#/components/NavbarLinks'
import sections from '#/constants/section-ids'
import getLocaleText from 'app/lib/getLocaleText'
import { i18n } from 'i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function Navbar() {
  const links = []

  for (const section of sections.filter(({ hideInNavbar }) => !hideInNavbar)) {
    const { id } = section
    const label = await getLocaleText(`${id}.title`)
    links.push({ id, label })
  }

  return (
    <nav className={styles.base}>
      <NavbarButtons />
      <NavbarLinks links={links} />
    </nav>
  )
}
