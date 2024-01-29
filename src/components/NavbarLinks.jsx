'use client'

import styles from '@/styles/NavbarLinks.module.css'

import Link from '@/components/Link'
import useAppStore from '@/state/store'
import clsx from 'clsx/lite'

export default function NavbarLinks({ links }) {
  const { currentSection } = useAppStore()

  return (
    <div className={styles.base}>
      {links.map(({ id, label }) => (
        <Link
          key={id}
          href={`#${id}`}
          className={clsx(
            styles.link,
            id === currentSection && `${styles.current} blur-background`
          )}
          replace
          noDecoration
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
