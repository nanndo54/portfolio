import styles from '#/styles/Text.module.css'
import React from 'react'
import { FormattedMessage } from 'react-intl'

function Text({ children, id = null, as = null, className = '', ...props }) {
  const Component = as || React.Fragment
  return (
    <Component className={`${styles.base} ${className}`} {...props}>
      {id ? <FormattedMessage id={id} /> : children}
    </Component>
  )
}

export default Text
