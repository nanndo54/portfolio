import languages from '#/constants/languages'
import parse from 'html-react-parser'

export default function getLocaleText(localeId) {
  const locale = 'en'
  const language = languages[locale]

  return parse(language[localeId])
}
