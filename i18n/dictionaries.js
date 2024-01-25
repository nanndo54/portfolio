import 'server-only'
import { i18n } from './config'

const dictionaries = i18n.locales.reduce((acc, lang) => {
  acc[lang] = () => import(`./locales/${lang}.json`).then((m) => m.default)
  return acc
}, {})

export const getDictionary = async (locale) =>
  dictionaries[locale]?.() ?? dictionaries[0]()
