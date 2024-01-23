'use client'

import styles from '#/styles/Text.module.css'
import parse from 'html-react-parser'

export default function RichText({ children, as: Tag, className = '', ...props }) {
  const childrenElement = parse(
    Array.isArray(children) ? children.join('') : String(children)
  )

  return Tag ? (
    <Tag className={`${styles.base} ${className}`} {...props}>
      {childrenElement}
    </Tag>
  ) : (
    childrenElement
  )
}
