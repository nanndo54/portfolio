'use client'

import useSvg from '#/hooks/useSvg'
import styles from '#/styles/Icon.module.css'

export default function Icon({
  className = '',
  contentColor,
  lightColor,
  darkColor,
  src,
  ...props
}) {
  const { SvgIcon } = useSvg(src)

  return (
    SvgIcon && (
      <SvgIcon
        className={`${styles.base} ${contentColor ? styles.contentColor : ''} 
        ${lightColor ? styles.lightColor : ''}
         ${darkColor ? styles.darkColor : ''} ${className}`}
        {...props}
      />
    )
  )
}
