import 'client-only'

import { dictionaries } from 'i18n/config'
import { createI18nClient } from 'next-international/client'

export const { useCurrentLocale } = createI18nClient(dictionaries)

export default function useDictionary(scope) {
  const locale = useCurrentLocale()
  const dictionary = dictionaries[locale]

  return scope ? dictionary[scope] : dictionary
}
