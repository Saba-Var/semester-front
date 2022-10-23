import { QueryClient } from 'react-query'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import Cookies from 'js-cookie'

const useApp = () => {
  const [queryClient] = useState(() => new QueryClient())
  const { push, locale, asPath } = useRouter()

  useEffect(() => {
    const language = Cookies.get('language')

    if (language && language !== locale) {
      push(asPath, asPath, { locale: language })
    } else {
      if (!language) {
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

export default useApp
