import styles from '@/styles/Modal.module.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '@/actions/modalActions'

import Skill from './Skill'
import Section from './Section'

import { getSkill } from '@/constants/skills'

function Modal() {
  const { show, name } = useSelector(({ modal }) => modal)
  const dispatch = useDispatch()

  const skill = getSkill(name)
  const { image, description } = skill

  const handleClose = () => {
    dispatch(hideModal())
  }

  const handleStopPropagation = (ev) => {
    ev.stopPropagation()
  }

  const closeOnEscape = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      handleClose()
    }
  }

  useEffect(() => {
    if (show) {
      document.body.addEventListener('keydown', closeOnEscape)
    } else {
      document.body.removeEventListener('keydown', closeOnEscape)
    }
  }, [show])
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
