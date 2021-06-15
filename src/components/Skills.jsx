import React from 'react'
import Skill from './Skill'

const skills = [
  {
    name: 'HTML',
    color: '#c4955f',
    image: '../../html-icon.png'
  },
  {
    name: 'CSS',
    color: '#4fb2ca',
    image: '../../css-icon.png'
  },
  {
    name: 'Javascript',
    color: '#c5c33c',
    image: '../../javascript-icon.png'
  },
  {
    name: 'GoLang',
    color: '#4285b3',
    image: '../../golang-icon.png'
  }
]

function Skills() {
  return (
    <>
      {skills.map(({ name, color, image }) => (
        <Skill name={name} color={color} image={image} key={name} />
      ))}
    </>
  )
}

export default Skills
