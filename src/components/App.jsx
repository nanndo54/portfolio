import React, { useContext } from 'react'
import styles from '../styles/App.module.css'
import Avatar from './Avatar'
import Skills from './Skills'
import Projects from './Projects'
import Navbar from './Navbar'
import Section from './Section'
import BackToTop from './BackToTop'
import P from './P'
import Title from './Title'

import LanguageContext from '../context/LanguageContext'

const body = {
  intro: {
    es: `Este es un texto de prueba Este es un texto de prueba Este es un texto de prueba Este es un texto de prueba Este es un
texto de prueba Este es un texto de prueba Este es un texto de prueba Este es un texto de prueba Este es un texto de
prueba Este es un texto de prueba Este es un texto de prueba Este es un texto de prueba`,
    en: `This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text `
  }
}

function App() {
  const { language } = useContext(LanguageContext)

  return (
    <>
      <Navbar />
      <div className={styles.base}>
        <Section type='header'>
          <Avatar />
          <P>{body.intro[language]}</P>
        </Section>
        <Section type='skills'>
          <Title>Habilidades</Title>
          <Skills />
        </Section>
        <Section type='projects'>
          <Title>Proyectos</Title>
          <Projects />
        </Section>
        <Title level={3}>Contact (WIP)</Title>
        <BackToTop />
      </div>
    </>
  )
}

export default App
