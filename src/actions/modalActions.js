const showModal = (name) => ({
  type: '@modal/show',
  payload: name
})

const hideModal = () => ({
  type: '@modal/hide'
})

export { showModal, hideModal }
