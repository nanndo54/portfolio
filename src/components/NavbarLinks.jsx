'use client'

import Link from '@/components/Link'
import useSectionObserver from '@/hooks/useSectionObserver'
import styles from '@/styles/NavbarLinks.module.css'
import clsx from 'clsx'

export default function NavbarLinks({ links }) {
  const currentSection = useSectionObserver()

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
