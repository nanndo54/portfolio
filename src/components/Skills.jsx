import React from 'react'
import styles from '@/styles/Skills.module.css'
import Skill from './Skill'

import htmlIcon from '@img/html-icon.png'
import cssIcon from '@img/css-icon.png'
import javascriptIcon from '@img/javascript-icon.png'
import reactIcon from '@img/react-icon.png'
import reduxIcon from '@img/redux-icon.png'

import expressIcon from '@img/express-icon.png'
import goIcon from '@img/golang-icon.png'
import pythonIcon from '@img/python-icon.png'
import mongodbIcon from '@img/mongodb-icon.png'
import mysqlIcon from '@img/mysql-icon.png'
import oraclesqlIcon from '@img/oraclesql-icon.png'

import awsIcon from '@img/aws-icon.png'
import oraclecloudIcon from '@img/oraclecloud-icon.png'

const frontendSkills = [
  {
    name: 'HTML',
    color: '#e56128',
    image: htmlIcon
  },
  {
    name: 'CSS',
    color: '#3399ff',
    image: cssIcon
  },
  {
    name: 'JavaScript',
    color: '#ead41c',
    image: javascriptIcon
  },
  {
    name: 'ReactJS',
    color: '#61dbfb',
    image: reactIcon
  },
  {
    name: 'Redux',
    color: '#764abc',
    image: reduxIcon
  }
]

const backendSkills = [
  {
    name: 'ExpressJS',
    color: '#88c043',
    image: expressIcon
  },
  {
    name: 'Go',
    color: '#6ad7e5',
    image: goIcon
  },
  {
    name: 'Python',
    color: '#3478ae',
    image: pythonIcon
  },
  {
    name: 'MongoDB',
    color: '#4cb03e',
    image: mongodbIcon
  },
  {
    name: 'MySQL',
    color: '#5d87a1',
    image: mysqlIcon
  },
  {
    name: 'Oracle SQL',
    color: '#8ea5af',
    image: oraclesqlIcon
  }
]

const otherSkills = [
  {
    name: 'AWS',
    color: '#ff9900',
    image: awsIcon
  },
  {
    name: 'Oracle Cloud',
    color: '#ea060d',
    image: oraclecloudIcon
  }
]

function Skills() {
  return (
    <div className={styles.base}>
      <h3>FrontEnd</h3>
      <div className={styles.skills}>
        {frontendSkills.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </div>
      <h3>BackEnd</h3>
      <div className={styles.skills}>
        {backendSkills.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </div>
      <h3>Otras</h3>
      <div className={styles.skills}>
        {otherSkills.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills
