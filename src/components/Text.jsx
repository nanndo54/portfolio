import styles from '#/styles/Text.module.css'
import React from 'react'
import { FormattedMessage } from 'react-intl'

function Text({ children, localeId = null, as: Component, className = '', ...props }) {
  const childrenElement = localeId ? <FormattedMessage id={localeId} /> : children

  return Component ? (
    <Component className={`${styles.base} ${className}`} {...props}>
      {childrenElement}
    </Component>
  ) : (
    <>{childrenElement}</>
  )
}

export default Text
