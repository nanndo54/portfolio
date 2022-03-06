import htmlIcon from '@assets/svg/html-icon.svg'
import cssIcon from '@assets/svg/css-icon.svg'
import javascriptIcon from '@assets/svg/javascript-icon.svg'
import typescriptIcon from '@assets/svg/typescript-icon.svg'
import reactIcon from '@assets/svg/reactjs-icon.svg'
import reduxIcon from '@assets/svg/redux-icon.svg'

import expressIcon from '@assets/svg/express-icon.svg'
import goIcon from '@assets/svg/go-icon.svg'
import pythonIcon from '@assets/svg/python-icon.svg'
import mongodbIcon from '@assets/svg/mongodb-icon.svg'
import mysqlIcon from '@assets/svg/mysql-icon.svg'
import oraclesqlIcon from '@assets/svg/oraclesql-icon.svg'

import javaIcon from '@assets/svg/java-icon.svg'
import awsIcon from '@assets/svg/aws-icon.svg'
import oraclecloudIcon from '@assets/svg/oraclecloud-icon.svg'

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
      image: expressIcon,
      invert: true
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
      name: 'OCI',
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
