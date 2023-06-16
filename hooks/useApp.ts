import { useEffect, useState } from 'react'
import { QueryClient } from 'react-query'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

export const useApp = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { refetchOnWindowFocus: false },
        },
      })
  )
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

  return { queryClient }
}
