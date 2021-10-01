import htmlIcon from '@img/html-icon.svg'
import cssIcon from '@img/css-icon.svg'
import javascriptIcon from '@img/javascript-icon.svg'
import typescriptIcon from '@img/typescript-icon.svg'
import reactIcon from '@img/reactjs-icon.svg'
import reduxIcon from '@img/redux-icon.svg'

import expressIcon from '@img/express-icon.svg'
import goIcon from '@img/go-icon.svg'
import pythonIcon from '@img/python-icon.svg'
import mongodbIcon from '@img/mongodb-icon.svg'
import mysqlIcon from '@img/mysql-icon.svg'
import oraclesqlIcon from '@img/oraclesql-icon.svg'

import javaIcon from '@img/java-icon.svg'
import awsIcon from '@img/aws-icon.svg'
import oraclecloudIcon from '@img/oraclecloud-icon.svg'

const skills = {
  FrontEnd: [
    {
      name: 'HTML',
      description:
        'Lenguaje de marcado de la web. Poseo alto conocimiento de HTML5 y buenas prácticas en el maquetado de páginas web.',
      image: htmlIcon
    },
    {
      name: 'CSS',
      description:
        'Lenguaje de diseño de la web. Poseo un gran conocimiento de styling de páginas web, así como animaciones y buenas prácticas.',
      image: cssIcon
    },
    {
      name: 'JavaScript',
      description:
        'Lenguaje de programación de la web. Poseo mucha experiencia con Vanilla JavaScript en la manipulación del DOM, así como el uso del entorno de ejecución Node.js para la creación de scripts y APIs de servidor.',
      image: javascriptIcon
    },
    {
      name: 'TypeScript',
      description: 'Lenguaje de programación supraconjunto de JavaScript',
      image: typescriptIcon
    },
    {
      name: 'ReactJS',
      description:
        'Librería de JavaScript para la construcción de interfaces de usuario. Tengo un gran entendimiento del uso de los mecanismos de ReactJS, así como el uso de hooks, creación de custom hooks, etc.',
      image: reactIcon
    },
    {
      name: 'Redux',
      description:
        'Librería de JavaScript para el manejo del estado global de aplicaciones web. Tengo experiencia de uso y buenas prácticas de Redux y Redux Toolkit en Vanilla JavaScript y ReactJs.',
      image: reduxIcon
    }
  ],
  BackEnd: [
    {
      name: 'ExpressJS',
      description:
        'Framework de JavaSript para la construcción de servidores HTTP. Poseo experiencia en la creación de APIs y REST APIs, uso de middlewares y análisis programático de datos.',
      image: expressIcon
    },
    {
      name: 'Go',
      description: 'Lenguaje de programación de Google.',
      image: goIcon
    },
    {
      name: 'Python',
      description: 'Lenguaje de programación multipropósito.',
      image: pythonIcon
    },
    {
      name: 'MongoDB',
      description:
        'Base de datos. Poseo experiencia en el uso eficiente de colecciones, y el uso de bases de datos en la nube.',
      image: mongodbIcon
    },
    {
      name: 'MySQL',
      description: 'desc',
      image: mysqlIcon
    },
    {
      name: 'PL/SQL',
      description: 'desc',
      image: oraclesqlIcon
    }
  ],
  Otras: [
    {
      name: 'Java',
      description: 'lenguaje de programación',
      image: javaIcon
    },
    {
      name: 'AWS',
      description: 'AWS',
      image: awsIcon
    },
    {
      name: 'Oracle Cloud',
      description: 'Uso de la nube avanzado',
      image: oraclecloudIcon
    }
  ]
}

const allSkills = Object.values(skills).reduce(
  (allSkills, skills) => [...allSkills, ...skills],
  []
)

const getSkill = (name) => allSkills.find((skill) => skill.name === name)

export default skills

export { getSkill }
