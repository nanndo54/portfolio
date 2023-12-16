import styles from '#/styles/Link.module.css'

function Link({ className = '', href, children, noDecoration = false, ...props }) {
  const isHashLink = href?.startsWith('#')
  const componentProps = {
    className: `${className} ${styles.base} ${noDecoration ? styles.noDecoration : ''}`,
    href,
    ...props
  }

  return isHashLink ? (
    <a
      {...componentProps}
      onClick={(ev) => {
        ev.preventDefault()
        const element = document.querySelector(href)
        if (!element) return

        element.scrollIntoView({ behavior: 'smooth' })
      }}
    >
      {children}
    </a>
  ) : (
    <a {...componentProps} target={'_blank'} rel={'noreferrer'}>
      {children}
    </a>
  )
}

export default Link
