import { languagesList } from 'CONSTANTS'
import { useRouter } from 'next/router'
import { HrefData } from './types.d'
import { useState } from 'react'
import Cookies from 'js-cookie'

export const useLanguageSelector = () => {
  const router = useRouter()
  const [selected, setSelected] = useState(
    router.locale === 'en' ? languagesList[1] : languagesList[0]
  )

  let hrefData: HrefData = router.asPath

  const languageChangeHandler = (lan: string) => {
    if (lan === 'en') {
      setSelected(languagesList[1])
    } else {
      setSelected(languagesList[0])
    }

    Cookies.set('language', lan, { expires: 365 })
  }

  return { selected, setSelected, hrefData, languageChangeHandler }
}
