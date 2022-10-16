import { languagesList } from 'CONSTANTS'
import { useRouter } from 'next/router'
import { HrefData } from './types.d'
import { useState } from 'react'

export const useLanguageSelector = () => {
  const router = useRouter()
  const [selected, setSelected] = useState(
    router.locale === 'en' ? languagesList[1] : languagesList[0]
  )

  let hrefData: HrefData = router.pathname

  const languageChangeHandler = (lan: string) => {
    if (lan === 'en') {
      setSelected(languagesList[1])
    } else {
      setSelected(languagesList[0])
    }

    localStorage.setItem('language', lan)
  }

  return { selected, setSelected, hrefData, languageChangeHandler }
}
