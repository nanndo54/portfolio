'use client'

import Link from '@/components/Link'
import useAppStore from '@/state/store'
import styles from '@/styles/NavbarButtons.module.css'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function NavbarButtons() {
  const { dictionary, theme, toggleTheme } = useAppStore()
  const { id: locale, aria } = dictionary

  return (
    <div className={styles.base}>
      <DarkModeSwitch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        moonColor='var(--content-color)'
        sunColor='var(--content-color)'
        aria-label={theme === 'dark' ? aria.setLightMode : aria.setDarkMode}
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
