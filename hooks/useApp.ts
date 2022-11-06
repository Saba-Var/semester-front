import { QueryClient } from 'react-query'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import Cookies from 'js-cookie'

const useApp = () => {
  const [queryClient] = useState(() => new QueryClient())
  const { push, locale, asPath } = useRouter()
  // check if hydration is done
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    if (!isHydrated) {
      setIsHydrated(true)
    }

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

  return { queryClient, isHydrated }
}

export default useApp
