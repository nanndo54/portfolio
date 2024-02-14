'use client'

import styles from '@/styles/NavbarLinks.module.css'

import Button from '@/components/Button'
import Icon from '@/components/Icon'
import { logoIcon } from '@/constants/icons'
import sections from '@/constants/sections'
import useAppStore from '@/state/store'
import clsx from 'clsx/lite'
import useDictionary from 'i18n/client'
import { useState } from 'react'

export default function NavbarLinks() {
  const { currentSection: currentSectionId } = useAppStore()
  const dictionary = useDictionary()
  const { aria } = dictionary

  const [isMenuOpen, setMenuOpen] = useState(false)

  const links = sections
    .filter(({ ignore }) => !ignore)
    .map(({ id }, index) => ({
      id,
      label: dictionary[id].title,
      children:
        index === 0 ? (
          <Icon className={styles.logo} src={logoIcon} />
        ) : (
          dictionary[id].title
        )
    }))
  const currentSection = links.find(({ id }) => id === currentSectionId)?.label

  return (
    <>
      <div className={styles.base}>
        {links.map(({ id, children }) => (
          <Button
            key={id}
            className={clsx(styles.link, currentSectionId === id && styles.current)}
            onClick={() => {
              document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
            }}
            title={`${aria.goTo} ${id}`}
          >
            {children}
          </Button>
        ))}
        {currentSection && (
          <Button
            className={clsx(styles.link, styles.current, styles.navigator)}
            onClick={() => setMenuOpen(true)}
            title={`navigate`}
          >
            {currentSection}
          </Button>
        )}
      </div>
      <div
        className={clsx(styles.menu, isMenuOpen && styles.open)}
        onClick={() => setMenuOpen(false)}
      >
        {links.map(({ id, label }) => (
          <Button
            key={id}
            className={clsx(styles.link, currentSectionId === id && styles.current)}
            onClick={() => {
              document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
              console.log('🚀 | document:', document)
            }}
            title={`${aria.goTo} ${id}`}
          >
            {label}
          </Button>
        ))}
      </div>
    </>
  )
}
