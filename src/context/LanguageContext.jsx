import React, { useState } from 'react'

const LanguageContext = React.createContext('es')

const allTexts = {
  es: {
    appTexts: {
      introduction: '',
      welcome: '',
      aboutMeTitle: '',
      skillsTitle: '',
      projectsTitle: '',
      contactMe: ''
    },
    projectsDescription: {
      Typesty: `Interfaz web creada con ReactJS que permite la edición y manipulación de archivos para un lenguaje de programación ficticio llamado 'typesty', muy parecido a C++.`,
      Regexive:
        'Aplicación de escritorio creada en Java Swing que facilita la edición y reportamiento de un lenguaje propio de la aplicación, que permite la declaración de expresiones regulares sencillas, así como validación de cadenas mediante estas expresiones.',
      'Quiniela APP':
        'Plataforma web para un negocio de quinielas de múltiples deportes. Soporta usuarios, creación de eventos deportivos organizados por temporadas y jornadas.'
    }
  },
  en: {
    appTexts: {
      introduction: 'description',
      welcome: 'description',
      aboutMeTitle: 'About me',
      skillsTitle: 'Skills',
      projectsTitle: 'Projects',
      contactMe: 'Contact me!'
    },
    projectsDescription: {
      Typesty: `Web app made in ReactJS which allows file handling and editing for a fictional programming language named 'typesty', a C-like language.`,
      Regexive: `Desktop application made with Java Swing. Regexive allows editing and reporting for Regexive's own programming language, a language for declaring and testing regular expressions.`,
      'Quiniela APP':
        'Web platform for an sports pool business. The platform supports creation of users, any-sport events organized by seasons and periods.'
    }
  }
}

export function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es')
  const [texts, setTexts] = useState(allTexts[language])

  const changeLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es'
    setLanguage(newLanguage)
    setTexts(allTexts[newLanguage])

    localStorage.setItem('language', newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, ...texts }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
