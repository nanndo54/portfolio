import styles from '@/styles/Icon.module.css'
import clsx from 'clsx/lite'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const classNameByType = {
  secondary: styles.secondary
}

export default function Icon({
  className = '',
  type = 'primary',
  border = false,
  scaleAnimation = false,
  src,
  alt = '',
  priority = false,
  contentColor = false,
  backgroundColor = false,
  lightColor = false,
  ...props
}) {
  const SvgIcon = dynamic(() => import(`/public/static/icons/${src}`))

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
        <SvgIcon className={styles.icon} title={alt} {...props} />
      )}
    </figure>
  )
}
