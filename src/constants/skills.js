import {
  HTMLIcon,
  CSSIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactJSIcon,
  ReduxIcon,
  ExpressIcon,
  GoIcon,
  PythonIcon,
  MongodbIcon,
  MySQLIcon,
  OracleSQLIcon,
  JavaIcon,
  AWSIcon,
  OracleCloudIcon
} from '#/constants/icons'

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
