import htmlIcon from '#/assets/svg/html-icon.svg?react'
import cssIcon from '#/assets/svg/css-icon.svg?react'
import javascriptIcon from '#/assets/svg/javascript-icon.svg?react'
import typescriptIcon from '#/assets/svg/typescript-icon.svg?react'
import reactjsIcon from '#/assets/svg/reactjs-icon.svg?react'
import reduxIcon from '#/assets/svg/redux-icon.svg?react'
import expressIcon from '#/assets/svg/express-icon.svg?react'
import goIcon from '#/assets/svg/go-icon.svg?react'
import pythonIcon from '#/assets/svg/python-icon.svg?react'
import mongodbIcon from '#/assets/svg/mongodb-icon.svg?react'
import mysqlIcon from '#/assets/svg/mysql-icon.svg?react'
import oraclesqlIcon from '#/assets/svg/oraclesql-icon.svg?react'
import javaIcon from '#/assets/svg/java-icon.svg?react'
import awsIcon from '#/assets/svg/aws-icon.svg?react'
import oraclecloudIcon from '#/assets/svg/oraclecloud-icon.svg?react'

const skills = {
  FrontEnd: [
    {
      name: 'HTML',
      icon: htmlIcon
    },
    {
      name: 'CSS',
      icon: cssIcon
    },
    {
      name: 'JavaScript',
      icon: javascriptIcon
    },
    {
      name: 'TypeScript',
      icon: typescriptIcon
    },
    {
      name: 'ReactJS',
      icon: reactjsIcon
    },
    {
      name: 'Redux',
      icon: reduxIcon
    }
  ],
  BackEnd: [
    {
      name: 'ExpressJS',
      icon: expressIcon,
      props: { contentColor: true }
    },
    {
      name: 'Go',
      icon: goIcon
    },
    {
      name: 'Python',
      icon: pythonIcon
    },
    {
      name: 'MongoDB',
      icon: mongodbIcon
    },
    {
      name: 'MySQL',
      icon: mysqlIcon
    },
    {
      name: 'PL/SQL',
      icon: oraclesqlIcon
    }
  ],
  Otras: [
    {
      name: 'Java',
      icon: javaIcon
    },
    {
      name: 'AWS',
      icon: awsIcon
    },
    {
      name: 'OCI',
      icon: oraclecloudIcon
    }
  ]
}

export default skills
