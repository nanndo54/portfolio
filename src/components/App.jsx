import React, { useContext } from 'react'
import Navbar from './Navbar'
import Section from './Section'
import Title from './Title'
import Paragraph from './Paragraph'
import Avatar from './Avatar'
import Skills from './Skills'
import Projects from './Projects'

import styles from '@/styles/App.module.css'

import LanguageContext from '@/context/LanguageContext'

function App() {
  const { appTexts } = useContext(LanguageContext)
  const { introduction, skillsTitle, projectsTitle, contactTitle } = appTexts

  return (
    <>
      <Navbar />
      <div className={styles.base}>
        <Section type='header'>
          <Title level={1} center>
            Pablo Fernando Cabrera Pineda
          </Title>
          <Avatar />
          <Paragraph center>{introduction}</Paragraph>
        </Section>
        <Section type='skills'>
          <Title>{skillsTitle}</Title>
          <Skills />
        </Section>
        <Section type='projects'>
          <Title>{projectsTitle}</Title>
          <Projects />
        </Section>
        <Title level={3}>{contactTitle} (WIP)</Title>
      </div>
    </>
  )
}

export default App
