import styles from '@/styles/Skill.module.css'
import React from 'react'
import { useDispatch } from 'react-redux'

import { showModal } from '@/actions/modalActions'

function Skill({ size = 'medium', name, image }) {
  const dispatch = useDispatch()

  const handleClick = () => {
    if (size === 'big') return
    dispatch(showModal(name))
  }

  const className = `${styles.base} ${
    size === 'big' ? styles.big : size === 'small' ? styles.small : ''
  }`

  return (
    <div className={className}>
      <button
        className={styles.icon}
        onClick={handleClick}
        title={size === 'small' ? name : ''}
      >
        <img src={image} alt={`${name} logo`} />
      </button>
      {size !== 'small' && <span>{name}</span>}
    </div>
  )
}

export default Skill
