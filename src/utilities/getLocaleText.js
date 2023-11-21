import { getState } from '#/store'

import en from '#/assets/lang/en.json'
import es from '#/assets/lang/es.json'

const locales = {
  en,
  es
}

export default function getLocaleText(id) {
  const { locale } = getState()

  return locales[locale][id]
}
