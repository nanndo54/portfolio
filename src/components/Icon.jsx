import styles from '@/styles/Icon.module.css'
import clsx from 'clsx/lite'
import Image from 'next/image'

export default function Icon({
  className = '',
  contentColor = false,
  backgroundColor = false,
  lightColor = false,
  src,
  alt = '',
  priority = false,
  ...props
}) {
  return (
    <Image
      className={clsx(
        className,
        styles.base,
        contentColor && styles.contentColor,
        backgroundColor && styles.backgroundColor,
        lightColor && styles.lightColor
      )}
      src={`/static/icons/${src}`}
      alt={alt}
      height={30}
      width={30}
      priority={priority}
      unoptimized
      {...props}
    />
  )
}
