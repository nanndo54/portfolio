import { useDispatch, useSelector } from 'react-redux'

import { toggleLanguage } from '@/actions/appActions'
import languages from '@/constants/languages'

function useLanguage() {
  const { locale } = useSelector(({ app }) => app)
  const dispatch = useDispatch()

  const language = languages[locale]

  const changeLanguage = () => {
    dispatch(toggleLanguage())
  }

  return { locale, language, changeLanguage }
}

export default useLanguage
