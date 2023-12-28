import htmlIcon from '#/assets/svg/html-icon.svg'
import cssIcon from '#/assets/svg/css-icon.svg'
import javascriptIcon from '#/assets/svg/javascript-icon.svg'
import typescriptIcon from '#/assets/svg/typescript-icon.svg'
import reactjsIcon from '#/assets/svg/reactjs-icon.svg'
import reduxIcon from '#/assets/svg/redux-icon.svg'
import expressIcon from '#/assets/svg/express-icon.svg'
import goIcon from '#/assets/svg/go-icon.svg'
import pythonIcon from '#/assets/svg/python-icon.svg'
import mongodbIcon from '#/assets/svg/mongodb-icon.svg'
import mysqlIcon from '#/assets/svg/mysql-icon.svg'
import oraclesqlIcon from '#/assets/svg/oraclesql-icon.svg'
import javaIcon from '#/assets/svg/java-icon.svg'
import awsIcon from '#/assets/svg/aws-icon.svg'
import oraclecloudIcon from '#/assets/svg/oraclecloud-icon.svg'

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
