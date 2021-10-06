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
      image: htmlIcon
    },
    {
      name: 'CSS',
      image: cssIcon
    },
    {
      name: 'JavaScript',
      image: javascriptIcon
    },
    {
      name: 'TypeScript',
      image: typescriptIcon
    },
    {
      name: 'ReactJS',
      image: reactIcon
    },
    {
      name: 'Redux',
      image: reduxIcon
    }
  ],
  BackEnd: [
    {
      name: 'ExpressJS',
      image: expressIcon
    },
    {
      name: 'Go',
      image: goIcon
    },
    {
      name: 'Python',
      image: pythonIcon
    },
    {
      name: 'MongoDB',
      image: mongodbIcon
    },
    {
      name: 'MySQL',
      image: mysqlIcon
    },
    {
      name: 'PL/SQL',
      image: oraclesqlIcon
    }
  ],
  Otras: [
    {
      name: 'Java',
      image: javaIcon
    },
    {
      name: 'AWS',
      image: awsIcon
    },
    {
      name: 'Oracle Cloud',
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
