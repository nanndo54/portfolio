import 'server-only'

import en from './locales/en.json'
import es from './locales/es.json'

export const dictionaries = {
  en,
  es
}

const locales = Object.keys(dictionaries)

export const i18n = {
  locales,
  defaultLocale: locales[0]
}
