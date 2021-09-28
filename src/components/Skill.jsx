import styles from '@/styles/Skill.module.css'
import React from 'react'
import { useDispatch } from 'react-redux'

import { showModal } from '@/actions/modalActions'

function Skill({ name, description, color, image, big = false }) {
  const dispatch = useDispatch()

  const handleClick = () => {
    const skill = { name, color, image, description }
    dispatch(showModal(skill))
  }

  return (
    <div className={`${styles.base} ${big ? styles.big : ''}`} onClick={handleClick}>
      <div className={styles.icon}>
        <img src={image} alt={`${name} icon`} />
      </div>
      <span>{name}</span>
    </div>
  )
}

export default Skill
