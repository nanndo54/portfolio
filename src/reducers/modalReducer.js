import { initialModal } from '@/store'

const appReducer = (state = initialModal, action) => {
  switch (action.type) {
    case '@modal/show': {
      const newState = { show: true, ...action.payload }
      return newState
    }
    case '@modal/hide': {
      const newState = { ...state, show: false }
      return newState
    }
    default:
      return state
  }
}

export default appReducer
