import es from '#/assets/lang/es.json'
import en from '#/assets/lang/en.json'

const languages = {
  es,
  en
}

const languageIsSupported = (languageCode) =>
  languageCode && Object.keys(languages).find((code) => languageCode.startsWith(code))

export default languages

export { languageIsSupported }
