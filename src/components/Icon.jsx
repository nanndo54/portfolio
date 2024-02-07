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
  scaleAnimation = false,
  src,
  alt,
  contentColor = false,
  backgroundColor = false,
  lightColor = false,
  priority = true,
  ...props
}) {
  const SvgIcon = useMemo(
    () => priority && dynamic(() => import(`/public/icons/${src}`)),
    [priority, src]
  )

  return (
    <figure
      className={clsx(
        className,
        styles.base,
        classNameByType[type],
        border && `${styles.border} blur-background`,
        contentColor && styles.contentColor,
        backgroundColor && styles.backgroundColor,
        lightColor && styles.lightColor
      )}
    >
      {priority ? (
        <SvgIcon
          className={clsx(styles.icon, scaleAnimation && 'scale-animation')}
          title={alt}
          {...props}
        />
      ) : (
        // <SVG
        //   className={clsx(styles.icon, scaleAnimation && 'scale-animation')}
        //   title={alt}
        //   src={`/icons/${src}`}
        //   {...props}
        // />
        'test'
      )}
    </figure>
  )
}
