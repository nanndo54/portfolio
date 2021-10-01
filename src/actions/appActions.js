const toggleTheme = () => ({
  type: '@app/toggleTheme'
})

const expandProject = (name) => ({
  type: '@app/expandProject',
  payload: name
})

export { toggleTheme, expandProject }
