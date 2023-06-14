import { useTranslation } from 'next-i18next'
import { useRef } from 'react'

const useCalendar = () => {
  const container = useRef(null)
  const containerNav = useRef(null)
  const containerOffset = useRef(null)

  const { t } = useTranslation()

  return {
    containerOffset,
    containerNav,
    container,
    t,
  }
}

export default useCalendar
