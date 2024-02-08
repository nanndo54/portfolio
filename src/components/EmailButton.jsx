'use client'

import Button from '@/components/Button'
import Icon from '@/components/Icon'
import { emailIcon } from '@/constants/icons'

export default function EmailButton() {
  return (
    <Button
      variant='secondary'
      onClick={() => navigator.clipboard.writeText('nanndo54@outlook.com')}
    >
      Copy my email
      <Icon src={emailIcon} foregroundColor />
    </Button>
  )
}
