import styles from '#/styles/Text.module.css'
import getLocaleText from 'app/lib/getLocaleText'

export default function Text({
  children,
  localeId = null,
  as: Component,
  className = '',
  ...props
}) {
  const childrenElement = localeId ? getLocaleText(localeId) : children

  return Component ? (
    <Component className={`${styles.base} ${className}`} {...props}>
      {childrenElement}
    </Component>
  ) : (
    childrenElement
  )
}
