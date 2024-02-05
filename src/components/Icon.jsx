import styles from '@/styles/Icon.module.css'
import clsx from 'clsx/lite'
import dynamic from 'next/dynamic'
import { memo } from 'react'
import SVG from 'react-inlinesvg'

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
  priority = false,
  ...props
}) {
  const SvgIcon =
    priority &&
    memo(
      dynamic(() => import(`/public/static/icons/${src}`)),
      []
    )

  return (
    <figure
      className={clsx(
        className,
        styles.base,
        classNameByType[type],
        border && `${styles.border} blur-background`,
        scaleAnimation && 'scale-animation',
        contentColor && styles.contentColor,
        backgroundColor && styles.backgroundColor,
        lightColor && styles.lightColor
      )}
    >
      {priority ? (
        <SvgIcon className={styles.icon} title={alt} {...props} />
      ) : (
        <SVG
          className={styles.icon}
          title={alt}
          src={`/static/icons/${src}`}
          {...props}
        />
      )}
    </figure>
  )
}
