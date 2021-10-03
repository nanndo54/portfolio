import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '@/actions/modalActions'
import { getSkill } from '@/constants/skills'

function useModal() {
  const { show, name } = useSelector(({ modal }) => modal)
  const dispatch = useDispatch()

  const skill = getSkill(name)

  const handleClose = () => {
    dispatch(hideModal())
  }

  const handleStopPropagation = (ev) => {
    ev.stopPropagation()
  }

  useEffect(() => {
    const closeOnEscape = (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        handleClose()
      }
    }

    document.body.addEventListener('keydown', closeOnEscape)
  }, [])

  return { show, handleClose, handleStopPropagation, skill }
}

export default useModal
