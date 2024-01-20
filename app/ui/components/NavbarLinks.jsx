'use client'

import Link from '#/components/Link'
import Text from '#/components/Text'
import sections from '#/constants/sections'
import useSectionObserver from '#/hooks/useSectionObserver'
import styles from '#/styles/NavbarLinks.module.css'

export default function NavbarLinks() {
  const currentSection = useSectionObserver()

  return (
    <div className={styles.base}>
      {sections
        .filter(({ hideInNavbar }) => !hideInNavbar)
        .map(({ id }) => (
          <Link
            key={id}
            href={`#${id}`}
            className={`${styles.link} ${
              id === currentSection ? `${styles.current} blur-background` : ''
            }`}
            noDecoration
          >
            <Text localeId={`${id}.title`} />
          </Link>
        ))}
    </div>
  )
}
