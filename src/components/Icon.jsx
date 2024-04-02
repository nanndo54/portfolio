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
  hintPosition,
  src,
  alt,
  hidden = false,
  foregroundColor = false,
  backgroundColor = false,
  accentColor = false,
  lightColor = false,
  ...props
}) {
  const SvgIcon = useMemo(() => dynamic(() => import(`/public/icons/${src}`)), [src])
  const ariaHidden = hidden ? true : undefined

  const iconElement = (
    <SvgIcon className={styles.icon} title={alt} {...props} aria-hidden={ariaHidden} />
  )

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
      aria-hidden={ariaHidden}
    >
      {hint ? (
        <Hint label={hint} position={hintPosition}>
          {iconElement}
        </Hint>
      ) : (
        iconElement
      )}
    </figure>
  )
}
