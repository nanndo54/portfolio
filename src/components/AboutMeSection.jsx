import styles from '@/styles/AboutMeSection.module.css'
import React from 'react'
import Section from './Section'

import guatemalaImage from '@img/guatemala.jpg'
import facultyImage from '@img/ingenieria.jpg'

function AboutMeSection() {
  return (
    <Section>
      <h2>Acerca de mí</h2>
      <div className={styles.inline}>
        <img src={guatemalaImage} alt='Guatemala' />
        <p>
          Resido en la capital de Guatemala 🇬🇹, lugar de volcanes, de gran clima y gente
          alegre. Por supuesto, estoy abierto a trabajar con equipos internacionales
          mediante teletrabajo.
        </p>
      </div>
      <div className={styles.inline}>
        <p>
          Estoy cursando un grado de ingeniería en ciencias y sistemas en la Universidad
          de San Carlos de Guatemala, gracias al cual he desarrollado una gran habilidad
          en el desarrollo de software, y gran pasión en todo lo relacionado con la
          tecnología 💻.
        </p>
        <img src={facultyImage} alt='mi facultad' />
      </div>
      <p>
        Me aficionan los deportes, los videojuegos de muchos géneros y disfruto de
        desarrollar software con buenas prácticas y clean code 📖.
      </p>
    </Section>
  )
}

export default AboutMeSection
