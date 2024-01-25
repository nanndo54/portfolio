import {
  awsIcon,
  cssIcon,
  expressIcon,
  goIcon,
  htmlIcon,
  javaIcon,
  javascriptIcon,
  mongodbIcon,
  mysqlIcon,
  oraclecloudIcon,
  oraclesqlIcon,
  pythonIcon,
  reactjsIcon,
  reduxIcon,
  typescriptIcon
} from '@/constants/icons'

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
