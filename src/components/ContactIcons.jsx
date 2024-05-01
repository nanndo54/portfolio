import Hint from '@/components/Hint'
import IconLink from '@/components/IconLink'
import styles from '@/styles/ContactIcons.module.css'
import clsx from 'clsx/lite'

import getDictionary from 'i18n/server'

export default async function ContactIcons({ className }) {
  const contacts = await getDictionary('contacts')

  return (
    <div className={clsx(styles.base, className)}>
      {contacts.map(({ name, icon, url, props }) => (
        <Hint key={name} label={name} position='bottom'>
          <IconLink
            src={icon}
            hint
            iconProps={{
              foregroundColor: true,
              interactive: true,
              ...props
            }}
            title={name}
            href={url}
          />
        </Hint>
      ))}
    </div>
  )
}
