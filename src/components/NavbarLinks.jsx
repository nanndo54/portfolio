'use client'

import styles from '@/styles/NavbarLinks.module.css'

import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import { closeIcon } from '@/constants/icons'
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

  const handleOpenMenu = () => {
    document.body.classList.add('no-scroll')
    setMenuOpen(true)
  }

  const handleCloseMenu = () => {
    document.body.classList.remove('no-scroll')
    setMenuOpen(false)
  }

  const links = sections
    .slice(1)
    .filter(({ ignore }) => !ignore)
    .map(({ id }) => ({
      id,
      label: dictionary[id].title
    }))
  const currentSection = links.find(({ id }) => id === currentSectionId)?.label

  return (
    <>
      <div className={styles.base}>
        {links.map(({ id, label }) => (
          <Button
            key={id}
            className={clsx(styles.link, currentSectionId === id && styles.current)}
            onClick={() => {
              document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
            }}
            title={`${aria.goTo} ${label}`}
          >
            {label}
          </Button>
        ))}
        {currentSection && (
          <Button
            className={clsx(styles.link, styles.current, styles.navigator)}
            onClick={handleOpenMenu}
            title={aria.navigateTo}
          >
            {currentSection}
          </Button>
        )}
      </div>
      <div
        className={clsx(styles.menu, isMenuOpen && styles.open)}
        onClick={handleCloseMenu}
      >
        <IconButton
          src={closeIcon}
          iconProps={{ lightColor: true }}
          title={aria.close}
          className={styles.closeButton}
        />
        {links.map(({ id, label }) => (
          <Button
            key={id}
            className={clsx(
              styles.link,
              currentSectionId === id && styles.current,
              'no-select'
            )}
            onClick={() =>
              document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
            }
            title={`${aria.goTo} ${id}`}
          >
            {label}
          </Button>
        ))}
      </div>
    </>
  )
}
