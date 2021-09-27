import React from 'react'
import styles from '@/styles/Skill.module.css'

import defaultImage from '@img/default-technology-icon.png'
import { useDispatch } from 'react-redux'
import { showModal } from '@/actions/modalActions'

function Skill({ name = 'NoName', color = 'red', image = defaultImage, big = false }) {
  const dispatch = useDispatch()

  const handleClick = () => {
    const skill = { name, color, image, description: `me gusta mucho ${name}` }
    dispatch(showModal(skill))
  }

  const style = {
    border: `3px solid ${color}`
  }

  return (
    <div className={`${styles.base} ${big ? styles.big : ''}`} onClick={handleClick}>
      <div className={styles.icon} style={style}>
        <img src={image} alt={`${name} icon`} />
      </div>
      <span>{name}</span>
    </div>
  )
}

export default Skill
