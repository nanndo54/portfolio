'use client'
import Hint from '@/components/Hint'
import styles from '@/styles/Input.module.css'

import clsx from 'clsx/lite'
import useDictionary from 'i18n/client'

export default function Input({
  label,
  name,
  type = 'text',
  placeholder,
  textarea = false,
  required = false,
  maxLength,
  pattern,
  defaultValue,
  autoComplete
}) {
  const { form } = useDictionary('contact')
  const { requiredLabel } = form

  const Tag = textarea ? 'textarea' : 'input'
  const props = {
    className: styles.input,
    name,
    placeholder,
    required,
    maxLength,
    pattern,
    defaultValue,
    type: textarea ? undefined : type,
    rows: textarea ? 4 : undefined
  }

  return (
    <label className={clsx(styles.base, 'interactive-border')}>
      <Hint
        className={clsx(styles.label, 'interactive-text')}
        label={required ? requiredLabel : undefined}
      >
        <b>{label}</b>
      </Hint>
      <Tag {...props} autoComplete={autoComplete} />
    </label>
  )
}
