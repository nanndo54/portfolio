import styles from '#/styles/Experience.module.css'
// import { FormattedMessage } from 'react-intl'

function Experience ({ company, position, logo, from, to, url }) {
  return (
    <article className={styles.base}>
      <div className={styles.header}>
        <h3>
          <a target='_blank' rel='noreferrer' href={url}>
            {company} {from} {to}
          </a>
        </h3>
        <h4>
          <a target='_blank' rel='noreferrer' href={url}>
            {position}
          </a>
        </h4>
      </div>
      <div className={styles.content}>
        <p>{/* <FormattedMessage id={`project.${position}`} /> */}</p>
        <div className={styles.images}>
          <img src={logo} alt={`${company} logo`} />
        </div>
      </div>
    </article>
  )
}

export default Experience
