import Hint from '@/components/Hint'
import styles from '@/styles/Icon.module.css'
import clsx from 'clsx/lite'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'

const classNameByType = {
  secondary: styles.secondary
}

export default function Icon({
  className,
  type = 'primary',
  border = false,
  interactive = false,
  hint,
  src,
  alt,
  foregroundColor = false,
  backgroundColor = false,
  accentColor = false,
  lightColor = false,
  ...props
}) {
  const SvgIcon = useMemo(() => dynamic(() => import(`/public/icons/${src}`)), [src])

  const iconElement = <SvgIcon className={styles.icon} title={alt} {...props} />

  return (
    <figure
      className={clsx(
        className,
        styles.base,
        classNameByType[type],
        border && styles.border,
        interactive && 'interactive-border',
        foregroundColor && styles.foregroundColor,
        backgroundColor && styles.backgroundColor,
        accentColor && styles.accentColor,
        lightColor && styles.lightColor
      )}
    >
      {hint ? <Hint label={hint}>{iconElement}</Hint> : iconElement}
    </figure>
  )
}
