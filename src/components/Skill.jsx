import styles from '@/styles/Skill.module.css'
import React from 'react'
import { useDispatch } from 'react-redux'

import { showModal } from '@/actions/modalActions'

function Skill({ big = false, ...skill }) {
  const { name, image } = skill
  const dispatch = useDispatch()

  const handleClick = () => {
    if (big) return
    dispatch(showModal(skill))
  }

  return (
    <div className={`${styles.base} ${big ? styles.big : ''}`} onClick={handleClick}>
      <button className={styles.icon}>
        <img src={image} alt={`${name} icon`} />
      </button>
      <span>{name}</span>
    </div>
  )
}

export default Skill
