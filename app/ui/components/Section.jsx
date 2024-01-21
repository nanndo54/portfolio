import styles from '#/styles/Section.module.css'

export default async function Section({
  background = true,
  as: Component = 'section',
  className = '',
  id,
  children
}) {
  return (
    <div className={styles.layout} id={id}>
      <Component
        className={`${styles.base} ${className} ${background ? styles.background : ''}`}
      >
        {children}
      </Component>
    </div>
  )
}
