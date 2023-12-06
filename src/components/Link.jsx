import styles from '#/styles/Link.module.css'

function Link({ className = '', href, children, noDecoration = false, ...props }) {
  const isHashLink = href?.startsWith('#')

  return isHashLink ? (
    <button
      type='button'
      className={`${className} ${styles.base} ${noDecoration ? styles.noDecoration : ''}`}
      onClick={() => {
        const element = document.querySelector(href)
        if (!element) return

        element.scrollIntoView({ behavior: 'smooth' })
      }}
      {...props}
    >
      {children}
    </button>
  ) : (
    <a
      className={`${className} ${styles.base} ${noDecoration ? styles.noDecoration : ''}`}
      target={'_blank'}
      rel={'noreferrer'}
      href={href}
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
