import React, { useEffect } from 'react'
import styles from '@/styles/Modal.module.css'
import Section from './Section'
import Skill from './Skill'

import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '@/actions/modalActions'

function Modal({}) {
  const { show, name, color, image, description } = useSelector(({ modal }) => modal)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(hideModal())
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
      <Section shadow onClick={(e) => e.stopPropagation()}>
        <div className={`${styles.close} unselectable`} onClick={handleClose}>
          ✕
        </div>
        <Skill name={name} color={color} image={image} big />
        <p>{description}</p>
      </Section>
    </div>
  )
}

export default Modal
