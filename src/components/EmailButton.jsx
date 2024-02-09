'use client'

import Button from '@/components/Button'
import Icon from '@/components/Icon'
import { emailIcon } from '@/constants/icons'
import useDictionary from 'i18n/client'

export default function EmailButton() {
  const { email, emailButton } = useDictionary('landing')

  return (
    <Button variant='secondary' onClick={() => navigator.clipboard.writeText(email)}>
      {emailButton}
      <Icon src={emailIcon} foregroundColor />
    </Button>
  )
}
