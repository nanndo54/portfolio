import styles from '@/styles/Modal.module.css'
import React from 'react'

import Skill from './Skill'
import Section from './Section'

import useModal from '@/hooks/useModal'

function Modal() {
  const { show, handleClose, handleStopPropagation, skill } = useModal()
  const { name, image, description } = skill

  return (
    <div className={`${styles.base} ${show ? styles.show : ''}`} onClick={handleClose}>
      <Section onClick={handleStopPropagation} Tag='aside'>
        <button className={styles.close} onClick={handleClose}>
          ✕
        </button>
        <Skill name={name} image={image} size='big' />
        <p className='center'>{description}</p>
      </Section>
    </div>
  )
}

export default Modal
