import styles from '@/styles/Icon.module.css'
import clsx from 'clsx/lite'
import Image from 'next/image'
import SVG from 'react-inlinesvg'

export default function Icon({
  className = '',
  border = false,
  src,
  alt = '',
  priority = false,
  contentColor = false,
  backgroundColor = false,
  lightColor = false,
  ...props
}) {
  return (
    <picture
      className={clsx(
        className,
        border && styles.border,
        styles.base,
        contentColor && styles.contentColor,
        backgroundColor && styles.backgroundColor,
        lightColor && styles.lightColor
      )}
    >
      {priority ? (
        <Image
          className={styles.icon}
          src={`/static/icons/${src}`}
          alt={alt}
          height={30}
          width={30}
          priority
          unoptimized
          {...props}
        />
      ) : (
        <SVG
          className={styles.icon}
          src={`/static/icons/${src}`}
          title={alt}
          {...props}
        />
      )}
    </picture>
  )
}
