import useSvg from '#/hooks/useSvg'
import styles from '#/styles/Icon.module.css'

function Icon({ className = '', contentColor, lightColor, src, ...props }) {
  const { SvgIcon } = useSvg(src)

  return (
    SvgIcon && (
      <SvgIcon
        className={`${styles.base} ${contentColor ? styles.contentColor : ''} ${
          lightColor ? styles.lightColor : ''
        } ${className}`}
        {...props}
      />
    )
  )
}

export default Icon