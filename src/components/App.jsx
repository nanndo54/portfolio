import React from 'react'
import styles from '../styles/App.module.css'
import Avatar from './Avatar'
import Skill from './Skill'
import Navbar from './Navbar'
import Section from './Section'
import BackToTop from './BackToTop'
import P from './P'
import Title from './Title'

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.base}>
        <Section type='header'>
          <Avatar />
          <P>
            Este es un texto de prueba Este es un texto de prueba Este es un texto de prueba Este es un texto de prueba Este es un
            texto de prueba Este es un texto de prueba Este es un texto de prueba Este es un texto de prueba Este es un texto de
            prueba Este es un texto de prueba Este es un texto de prueba Este es un texto de prueba
          </P>
        </Section>
        <Section type='skills'>
          <Title>Habilidades</Title>
          <Skill name='HTML' />
          <Skill name='CSS' />
          <Skill name='Javascript' />
          <Skill name='GoLang' />
          <Skill name='React' />
          <Skill name='Java' />
          <Skill name='C++' />
        </Section>
        <BackToTop />
      </div>
    </>
  )
}

export default App
