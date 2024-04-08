'use client'
import styles from '@/styles/Logo.module.css'

import Button from '@/components/Button'
import Icon from '@/components/Icon'
import { logoIcon } from '@/constants/icons'
import useAppStore from '@/state/store'
import clsx from 'clsx'
import useDictionary from 'i18n/client'

export default function Logo() {
  const { currentSection } = useAppStore()
  const dictionary = useDictionary()
  const { aria } = dictionary

  return (
    <Button
      className={clsx(styles.base, currentSection === 'landing' && styles.current)}
      onClick={() => {
        document.getElementById('landing').scrollIntoView({ behavior: 'smooth' })
      }}
      title={aria.goToTop}
    >
      <Icon src={logoIcon} />
    </Button>
  )
}
