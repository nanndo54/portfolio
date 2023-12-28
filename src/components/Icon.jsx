import styles from '#/styles/Icon.module.css'

import useSvg from '#/hooks/useSvg'

function Icon({ className = '', contentColor, src, ...props }) {
  const { loading, SvgIcon } = useSvg(`${src}?react`)

  return loading || !SvgIcon ? (
    <div />
  ) : (
    <SvgIcon
      className={`${styles.base} ${contentColor ? styles.contentColor : ''} ${className}`}
      {...props}
    />
  )
}

export default Icon
