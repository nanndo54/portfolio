'use client'
import styles from '@/styles/Logo.module.css'

import Button from '@/components/Button'
import Hint from '@/components/Hint'
import Icon from '@/components/Icon'
import { logoIcon } from '@/constants/icons'
import useAppStore from '@/state/store'
import clsx from 'clsx/lite'
import useDictionary from 'i18n/client'

const available = true

export default function Logo() {
  const { currentSection } = useAppStore()
  const dictionary = useDictionary()
  const { landing, aria } = dictionary

  return (
    <div className={styles.base}>
      <Button
        className={clsx(styles.logo, currentSection === 'landing' && styles.current)}
        onClick={() => {
          document.getElementById('landing').scrollIntoView({ behavior: 'smooth' })
        }}
        title={aria.goToTop}
      >
        <Icon src={logoIcon} />
      </Button>
      {available && (
        <Hint className={styles.status} label={aria.goToContact} position='bottom'>
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {landing.available}
          </button>
        </Hint>
      )}
    </div>
  )
}
