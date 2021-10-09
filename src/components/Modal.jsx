import styles from '@/styles/Modal.module.css'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Skill from '@/components/Skill'
import Section from '@/components/Section'

import useModal from '@/hooks/useModal'

function Modal() {
  const { show, handleClose, handleStopPropagation, skill } = useModal()
  const { name, image } = skill

  return (
    <div className={`${styles.base} ${show ? styles.show : ''}`} onClick={handleClose}>
      <Section Tag='aside' className={styles.modal} onClick={handleStopPropagation}>
        <button className={styles.close} onClick={handleClose}>
          ✕
        </button>
        <Skill name={name} image={image} size='big' />
        <p className='center'>
          <FormattedMessage id={`skill.${name.toLowerCase()}`} />
        </p>
      </Section>
    </div>
  )
}

export default Modal
