import 'server-only'

import { getDictionary } from 'dictionaries'
import parse from 'html-react-parser'

export default async function getLocaleText(localeId) {
  const locale = 'en'
  const dictionary = await getDictionary(locale)

  return parse(dictionary[localeId])
}
