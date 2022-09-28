import { languagesList } from 'CONSTANTS'
import { useState } from 'react'

export const useLanguageSelector = () => {
  const [selected, setSelected] = useState(languagesList[0])

  return { selected, setSelected }
}
