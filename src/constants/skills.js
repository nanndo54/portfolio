import HTMLIcon from '#/assets/svg/html-icon.svg?react'
import CSSIcon from '#/assets/svg/css-icon.svg?react'
import JavaScriptIcon from '#/assets/svg/javascript-icon.svg?react'
import TypeScriptIcon from '#/assets/svg/typescript-icon.svg?react'
import ReactJSIcon from '#/assets/svg/reactjs-icon.svg?react'
import ReduxIcon from '#/assets/svg/redux-icon.svg?react'

import ExpressIcon from '#/assets/svg/express-icon.svg?react'
import GoIcon from '#/assets/svg/go-icon.svg?react'
import PythonIcon from '#/assets/svg/python-icon.svg?react'
import MongodbIcon from '#/assets/svg/mongodb-icon.svg?react'
import MySQLIcon from '#/assets/svg/mysql-icon.svg?react'
import OracleSQLIcon from '#/assets/svg/oraclesql-icon.svg?react'

import JavaIcon from '#/assets/svg/java-icon.svg?react'
import AWSIcon from '#/assets/svg/aws-icon.svg?react'
import OracleCloudIcon from '#/assets/svg/oraclecloud-icon.svg?react'

const skills = {
  FrontEnd: [
    {
      name: 'HTML',
      icon: HTMLIcon
    },
    {
      name: 'CSS',
      icon: CSSIcon
    },
    {
      name: 'JavaScript',
      icon: JavaScriptIcon
    },
    {
      name: 'TypeScript',
      icon: TypeScriptIcon
    },
    {
      name: 'ReactJS',
      icon: ReactJSIcon
    },
    {
      name: 'Redux',
      icon: ReduxIcon
    }
  ],
  BackEnd: [
    {
      name: 'ExpressJS',
      icon: ExpressIcon,
      props: { contentColor: true }
    },
    {
      name: 'Go',
      icon: GoIcon
    },
    {
      name: 'Python',
      icon: PythonIcon
    },
    {
      name: 'MongoDB',
      icon: MongodbIcon
    },
    {
      name: 'MySQL',
      icon: MySQLIcon
    },
    {
      name: 'PL/SQL',
      icon: OracleSQLIcon
    }
  ],
  Otras: [
    {
      name: 'Java',
      icon: JavaIcon
    },
    {
      name: 'AWS',
      icon: AWSIcon
    },
    {
      name: 'OCI',
      icon: OracleCloudIcon
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
