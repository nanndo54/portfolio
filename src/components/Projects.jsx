import React, { useContext } from 'react'
import Project from './Project'
import LanguageContext from '../context/LanguageContext'

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
  projects.forEach((project) => (project.description = projectsDescription[project.name]))

  return (
    <>
      {projects.map(({ name, description, url, technologies, deployed }) => (
        <Project key={name} name={name} description={description} url={url} technologies={technologies} deployed={deployed} />
      ))}
    </>
  )
}

export default Projects
