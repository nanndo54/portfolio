import styles from '#styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.base}>
      Source:{' '}
      <a target='_blank' rel='noreferrer' href='https://github.com/pabloc54'>
        GitHub
      </a>
    </footer>
  )
}

export default Footer
