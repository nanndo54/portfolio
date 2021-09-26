import React, { useContext } from 'react'
import styles from '@/styles/Projects.module.css'

import Project from './Project'
import LanguageContext from '@/context/LanguageContext'

const projects = [
  {
    name: 'Typesty',
    url: 'https://github.com/PabloC54/OLC1-Typesty',
    technologies: ['ReactJS', 'Jison'],
    deployed: false
  },
  {
    name: 'Regexive',
    url: 'https://github.com/PabloC54/OLC1-Regexive',
    technologies: ['Java'],
    deployed: false
  },
  {
    name: 'Quiniela APP',
    url: 'https://github.com/PabloC54/MIA-Quiniela-app',
    technologies: ['ReactJS', 'GoLang', 'Oracle'],
    deployed: false
  }
]

function Projects() {
  const { projectsDescription } = useContext(LanguageContext)
  const description = 'este es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicadoeste es un proyecto complicado'

  return (
    <div className={styles.base}>
      {/* {projects.map((project, i) => (
        <Project key={i} {...project} description={projectsDescription[project.name]} />
      ))} */}


      <Project name='Testing avanzado' url='#' description={description} />
    </div>
  )
}

export default Projects
