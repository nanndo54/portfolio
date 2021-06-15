import React, { useState } from 'react'

const LanguageContext = React.createContext('es')

export function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState('es')

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export default LanguageContext
