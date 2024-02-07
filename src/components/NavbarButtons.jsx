'use client'

import Link from '@/components/Link'
import useAppStore from '@/state/store'
import styles from '@/styles/NavbarButtons.module.css'
import useDictionary, { useCurrentLocale } from 'i18n/client'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function NavbarButtons() {
  const { theme, toggleTheme } = useAppStore()
  const { aria } = useDictionary()
  const locale = useCurrentLocale()

  return (
    <div className={styles.base}>
      <DarkModeSwitch
        className='scale-animation'
        checked={theme === 'dark'}
        onChange={toggleTheme}
        moonColor='var(--content-color)'
        sunColor='var(--content-color)'
        title={theme === 'dark' ? aria.setLightMode : aria.setDarkMode}
      />
      <Link
        className={`${styles.language} scale-animation`}
        title={aria.toggleLocale}
        href={locale === 'en' ? '/es' : '/en'}
        replace
        scroll={false}
        noDecoration
      >
        {locale}
      </Link>
    </div>
  )
}
