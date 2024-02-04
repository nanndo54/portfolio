import styles from '@/styles/Icon.module.css'
import clsx from 'clsx/lite'
import Image from 'next/image'
import SVG from 'react-inlinesvg'

const classNameByType = {
  secondary: styles.secondary
}

export default function Icon({
  className = '',
  type = 'primary',
  border = false,
  hover = false,
  src,
  alt = '',
  priority = false,
  contentColor = false,
  backgroundColor = false,
  lightColor = false,
  ...props
}) {
  return (
    <figure
      className={clsx(
        className,
        styles.base,
        classNameByType[type],
        border && `${styles.border} blur-background`,
        hover && styles.hover,
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
    </figure>
  )
}
