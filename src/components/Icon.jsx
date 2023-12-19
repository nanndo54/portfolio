import useSvg from '#/hooks/useSvg'
import styles from '#/styles/Icon.module.css'

function Icon({ className = '', contentColor, src, ...props }) {
  const { loading, SvgIcon } = useSvg(`/src/assets/${src}`)

  if (loading || !SvgIcon)
    return <div className='rounded-full bg-slate-400 animate-pulse h-8 w-8'></div>
  return (
    <SvgIcon
      className={`${styles.base} ${contentColor ? styles.contentColor : ''} ${className}`}
      {...props}
    />
  )
}

export default Icon
