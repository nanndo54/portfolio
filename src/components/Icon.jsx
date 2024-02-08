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
  blur = false,
  scaleAnimation = false,
  src,
  alt,
  foregroundColor = false,
  backgroundColor = false,
  accentColor = false,
  lightColor = false,
  ...props
}) {
  const SvgIcon = useMemo(() => dynamic(() => import(`/public/icons/${src}`)), [src])

  return (
    <figure
      className={clsx(
        className,
        styles.base,
        classNameByType[type],
        border && styles.border,
        blur && 'blur-background',
        foregroundColor && styles.foregroundColor,
        backgroundColor && styles.backgroundColor,
        accentColor && styles.accentColor,
        lightColor && styles.lightColor
      )}
    >
      <SvgIcon
        className={clsx(styles.icon, scaleAnimation && 'scale-animation')}
        title={alt}
        {...props}
      />
    </figure>
  )
}
