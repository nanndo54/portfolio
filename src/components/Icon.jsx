import styles from '#/styles/Icon.module.css'

import useSvg from '#/hooks/useSvg'

function Icon({ className = '', contentColor, src, ...props }) {
  const { loading, SvgIcon } = useSvg(`/src/assets/${src}?react`)

  if (loading || !SvgIcon) return <div>loading</div>
  return (
    <SvgIcon
      className={`${styles.base} ${contentColor ? styles.contentColor : ''} ${className}`}
      {...props}
    />
  )
}

export default Icon
