import styles from '@/styles/NavbarLinks.module.css'

import Icon from '@/components/Icon'
import Link from '@/components/Link'
import { logoIcon } from '@/constants/icons'
import sections from '@/constants/sections'
import clsx from 'clsx/lite'
import getDictionary from 'i18n/server'

export default async function NavbarLinks() {
  const dictionary = await getDictionary()

  const links = sections
    .filter(({ ignore }) => !ignore)
    .map(({ id }, index) => ({
      id,
      children:
        index === 0 ? (
          <Icon className={styles.logo} src={logoIcon} />
        ) : (
          dictionary[id].title
        )
    }))

  return (
    <div className={styles.base}>
      {links.map(({ id, children }) => (
        <Link
          key={id}
          href={`#${id}`}
          className={clsx(styles.link, 'scale-animation')}
          replace
          decoration={false}
        >
          {children}
        </Link>
      ))}
    </div>
  )
}
