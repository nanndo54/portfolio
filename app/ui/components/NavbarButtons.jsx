'use client'

import Link from '#/components/Link'
import useAppStore from '#/state/store'
import styles from '#/styles/NavbarButtons.module.css'
import { useEffect } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function NavbarButtons({ locale }) {
  const { isOnTop, theme, toggleTheme } = useAppStore()

  useEffect(() => {
    const mainElement = document.querySelector('main')
    mainElement.setAttribute('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    const mainElement = document.querySelector('main')
    mainElement.setAttribute('top', isOnTop)
  }, [isOnTop])

  return (
    <div className={styles.base}>
      <DarkModeSwitch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        moonColor='var(--content-color)'
        sunColor='var(--content-color)'
        aria-hidden
      />
      <Link
        href={locale === 'en' ? '/es' : '/en'}
        replace
        scroll={false}
        className={styles.language}
        aria-label={locale}
        noDecoration
      >
        {locale}
      </Link>
    </div>
  )
}
