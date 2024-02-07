'use server'

import { dictionaries } from 'i18n/config'
import { createI18nServer } from 'next-international/server'

export const { getCurrentLocale } = createI18nServer(dictionaries)

export default async function getDictionary(scope) {
  const locale = getCurrentLocale()
  const dictionary = dictionaries[locale]

  return scope ? dictionary[scope] : dictionary
}
