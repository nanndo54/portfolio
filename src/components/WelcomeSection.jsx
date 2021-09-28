import React from 'react'

import Avatar from './Avatar'
import Section from './Section'

function WelcomeSection() {
  return (
    <Section shadow={false} fallback={false} buttonDirection='down'>
      <Avatar />
      <h1>Pablo Cabrera (pabloc54)</h1>
      <p className='small'>(En busca de trabajo)</p>
      <p className='center'>
        ¡Hola! Soy un Desarrollador Fullstack de Guatemala 🇬🇹 de seniority Junior, con
        amplios conocimientos en tecnologías web y diseño.
      </p>
      <p className='center'>
        ¡Te invito a conocer más de mí y de mis proyectos más abajo!
      </p>
    </Section>
  )
}

export default WelcomeSection
