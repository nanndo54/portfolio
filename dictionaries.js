import 'server-only'

const dictionaries = {
  en: () => import('./lang/en.json').then((module) => module.default),
  es: () => import('./lang/es.json').then((module) => module.default)
}

export const getDictionary = async (locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()
