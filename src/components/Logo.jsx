'use client'
import styles from '@/styles/Logo.module.css'

import Icon from '@/components/Icon'
import Link from '@/components/Link'
import { logoIcon } from '@/constants/icons'
import useAppStore from '@/state/store'
import clsx from 'clsx/lite'
import useDictionary from 'i18n/client'

export default function Logo() {
  const { currentSection } = useAppStore()
  const dictionary = useDictionary()
  const { aria } = dictionary

  return (
    <div className={styles.base}>
      <Link
        asButton
        href='/'
        className={clsx(styles.logo, currentSection === 'landing' && styles.current)}
        title={aria.goToTop}
      >
        <Icon src={logoIcon} />
      </Link>
    </div>
  )
}
