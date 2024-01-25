import styles from '@/styles/Icon.module.css'
import clsx from 'clsx/lite'
import SVG from 'react-inlinesvg'

export default function Icon({
  className = '',
  contentColor = false,
  backgroundColor = false,
  lightColor = false,
  src,
  alt = '',
  ...props
}) {
  return (
    // <Image
    //   className={clsx(
    //     className,
    //     styles.base,
    //     contentColor && styles.contentColor,
    //     backgroundColor && styles.backgroundColor,
    //     lightColor && styles.lightColor
    //   )}
    //   src={`/static/icons/${src}`}
    //   alt={alt}
    //   height={30}
    //   width={30}
    //   priority={priority}
    //   unoptimized
    //   {...props}
    // />
    <SVG
      className={clsx(
        className,
        styles.base,
        contentColor && styles.contentColor,
        backgroundColor && styles.backgroundColor,
        lightColor && styles.lightColor
      )}
      src={`/static/icons/${src}`}
      height={30}
      width={30}
      title={alt}
      {...props}
    />
  )
}
