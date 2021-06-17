import React from 'react'
import Skill from './Skill'

import html_img from '@img/html-icon.png'
import css_img from '@img/css-icon.png'
import javascript_img from '@img/javascript-icon.png'
import golang_img from '@img/golang-icon.png'

const skills = [
  {
    name: 'HTML',
    color: '#c4955f',
    image: html_img
  },
  {
    name: 'CSS',
    color: '#4fb2ca',
    image: css_img
  },
  {
    name: 'Javascript',
    color: '#c5c33c',
    image: javascript_img
  },
  {
    name: 'GoLang',
    color: '#4285b3',
    image: golang_img
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
