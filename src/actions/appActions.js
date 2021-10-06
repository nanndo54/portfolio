const toggleTheme = () => ({
  type: '@app/toggleTheme'
})

const toggleLanguage = () => ({
  type: '@app/toggleLanguage'
})

const expandProject = (name) => ({
  type: '@app/expandProject',
  payload: name
})

export { toggleTheme, toggleLanguage, expandProject }
