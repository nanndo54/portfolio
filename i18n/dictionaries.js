import 'server-only'
import { locales } from './config'

const dictionaries = locales.reduce((acc, lang) => {
  acc[lang] = () => import(`./locales/${lang}.json`).then((m) => m.default)
  return acc
}, {})

export const getDictionary = async (locale) =>
  dictionaries[locale]?.() ?? dictionaries[0]()
