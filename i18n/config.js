import en from './locales/en/dictionary'
import es from './locales/es/dictionary'

export const dictionaries = {
  en,
  es
}

export const locales = Object.keys(dictionaries)

export const i18n = {
  locales,
  defaultLocale: locales[0]
}
