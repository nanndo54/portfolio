const showModal = (payload) => ({
  type: '@modal/show',
  payload
})

const hideModal = () => ({
  type: '@modal/hide'
})

export { showModal, hideModal }
