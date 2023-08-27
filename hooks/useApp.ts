import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

export const useApp = () => {
  const { push, locale, asPath } = useRouter()

  useEffect(() => {
    const language = Cookies.get('language')
    const isValidLanguage = language === 'ka' || language === 'en'

    if (isValidLanguage && language !== locale) {
      push(asPath, asPath, { locale: language })
    } else {
      if (!language || !isValidLanguage) {
        Cookies.set('language', locale!, { expires: 365 })
      }

      if (language !== locale) {
        const uri = `${locale === 'en' ? '/en' : ''}${asPath}`
        push(uri, uri, { locale: language })
      }
    }
  }, [locale, asPath, push])
}
