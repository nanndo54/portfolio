import styles from '@/styles/Modal.module.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '@/actions/modalActions'

import Skill from './Skill'
import Section from './Section'

function Modal() {
  const { show, name, color, image, description } = useSelector(({ modal }) => modal)
  const dispatch = useDispatch()

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
        <div className={`${styles.close} unselectable`} onClick={handleClose}>
          ✕
        </div>
        <Skill name={name} color={color} image={image} big />
        <p className='center'>{description}</p>
      </Section>
    </div>
  )
}

export default Modal
