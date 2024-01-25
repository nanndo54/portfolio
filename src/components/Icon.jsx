import styles from '@/styles/Icon.module.css'
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
  // const { SvgIcon } = useSvg(src)

  return (
    <Image
      className={`${styles.base} ${contentColor ? styles.contentColor : ''} ${backgroundColor ? styles.backgroundColor : ''} ${lightColor ? styles.lightColor : ''} ${className}`}
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
