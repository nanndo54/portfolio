import en from './locales/en'
import es from './locales/es'

export const dictionaries = {
  en,
  es
}

const locales = Object.keys(dictionaries)

export const i18n = {
  locales,
  defaultLocale: locales[0]
}
