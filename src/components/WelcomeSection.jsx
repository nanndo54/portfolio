import styles from '@/styles/WelcomeSection.module.css'
import React from 'react'

import Section from '@/components/Section'

import photo from '@img/profile-photo.jpg'

function WelcomeSection() {
  return (
    <Section shadow={false} fallback={false} Tag='header'>
      <div className={styles.avatar}>
        <img src={photo} alt='me' />
      </div>
      <h1>Pablo Cabrera (pabloc54)</h1>
      <p className='small'>(En busca de trabajo)</p>
      <p className='center'>
        ¡Hola! Soy un Desarrollador Web Fullstack de seniority Junior, con amplios
        conocimientos en tecnologías web y diseño
      </p>
      <p className='center'>¡Te invito a conocer más de mí y mis proyectos más abajo!</p>
    </Section>
  )
}

export default WelcomeSection
