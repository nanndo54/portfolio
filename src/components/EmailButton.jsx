'use client'

import Button from '@/components/Button'
import Hint from '@/components/Hint'
import Icon from '@/components/Icon'
import { emailIcon } from '@/constants/icons'
import useDictionary from 'i18n/client'

export default function EmailButton() {
  const { landing, aria } = useDictionary()
  const { email, emailButton } = landing

  return (
    <Hint position='bottom' label={email} clickLabel={aria.copied}>
      <Button variant='secondary' onClick={() => navigator.clipboard.writeText(email)}>
        {emailButton}
        <Icon src={emailIcon} foregroundColor />
      </Button>
    </Hint>
  )
}
