import styles from '#/styles/Text.module.css'

import React from 'react'
import { useIntl } from 'react-intl'
import parse from 'html-react-parser'

function Text({ children, localeId = null, as: Component, className = '', ...props }) {
  const intl = useIntl()

  const childrenElement = localeId
    ? parse(intl.formatMessage({ id: localeId }))
    : children

  return Component ? (
    <Component className={`${styles.base} ${className}`} {...props}>
      {childrenElement}
    </Component>
  ) : (
    <>{childrenElement}</>
  )
}

export default Text
