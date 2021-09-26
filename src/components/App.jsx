import styles from '@/styles/App.module.css'
import React from 'react'
import { useSelector } from 'react-redux'

import Modal from '@/components/Modal'
import Navbar from '@/components/Navbar'
import Section from '@/components/Section'
import Avatar from '@/components/Avatar'
import Skills from '@/components/Skills'
// import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

import useTheme from '@/hooks/useTheme'

import guatemalaImage from '@img/guatemala.jpg'
import facultyImage from '@img/ingenieria.jpg'

function App() {
  const { theme } = useSelector(({ app }) => app)
  useTheme(theme)

  return (
    <div className={styles.base}>
      <Modal />
      <Navbar />
      <div className={styles.sections}>
        <Section>
          <Avatar />
          <h1 id='intro'>Pablo Cabrera</h1>
          <small>(En busca de trabajo)</small>
          <p className='center'>
            ¡Hola! Soy un Desarrollador Fullstack de Guatemala 🇬🇹 de seniority Junior, con
            amplios conocimientos en tecnologías web y diseño.
          </p>
          <p className='center'>
            ¡Te invito a conocer más de mí y de mis proyectos más abajo!
          </p>
        </Section>
        <Section shadow>
          <h2 id='aboutme'>Acerca de mí</h2>
          <img src={guatemalaImage} />
          <p>
            Resido en la capital de Guatemala, lugar de volcanes, de gran clima y gente
            alegre 🕺. Por supuesto, estoy abierto a trabajar con equipos de otros países
            mediante teletrabajo.
          </p>
          <img src={facultyImage} />
          <p>
            Estoy cursando un grado de ingeniería en ciencias y sistemas, gracias al cual
            he desarrollado una gran pasión al desarrollo de software, y todo lo
            relacionado con tecnología 💻.
          </p>
          <p>
            Me aficionan los deportes, los videojuegos de muchos generos y pasear con mi
            perro Connor 🐕.
          </p>
        </Section>
        <Section shadow>
          <h2 id='skills'>Habilidades</h2>
          <small>(Haz click para más detalles)</small>
          <Skills />
        </Section>
        {/* <Section shadow>
          <h2 id='projects'>Proyectos</h2>
          <Projects />
        </Section> */}
        <Section last>
          <h2>¿Te gusta lo que ves?</h2>
          <p>
            ¡Te invito a mandarme un mensaje por{' '}
            <a href='https://www.linkedin.com/in/pablo-cabrera-2a567b209/'>LinkedIn</a>!
            ✉️
          </p>
        </Section>
      </div>
      <Footer />
    </div>
  )
}

export default App
