import React, { useState } from 'react'
import Project from './Project'

const repos = [
  {
    name: 'Typesty',
    description: `Interfaz web creada con ReactJS que permite la edición y manipulación de archivos para un lenguaje ficticio llamado 'typesty', muy parecido a C++.`,
    url: 'https://github.com/PabloC54/OLC1-Typesty',
    technologies: ['ReactJS', 'Jison'],
    deployed: false
  },
  {
    name: 'Regexive',
    description:
      'Aplicación de escritorio creada en Java Swing que facilita la edición y reportamiento de un lenguaje propio de la aplicación, que permite la declaración de expresiones regulares sencillas, así como validación de cadenas mediante estas expresiones.',
    url: 'https://github.com/PabloC54/OLC1-Regexive',
    technologies: ['Java'],
    deployed: false
  },
  {
    name: 'Quiniela APP',
    description:
      'Plataforma web para un negocio de quinielas de múltiples deportes. Soporta usuarios, creación de eventos deportivos organizados por temporadas y jornadas.',
    url: 'https://github.com/PabloC54/MIA-Quiniela-app',
    technologies: ['ReactJS', 'GoLang', 'Oracle'],
    deployed: false
  }
]

function Projects() {
  return (
    <>
      {repos.map(({ name, description, url, technologies, deployed }) => (
        <Project key={name} name={name} description={description} url={url} technologies={technologies} deployed={deployed} />
      ))}
    </>
  )
}

export default Projects
