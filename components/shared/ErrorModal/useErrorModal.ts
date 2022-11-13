import { useTranslation } from 'next-i18next'
import { useRef } from 'react'

export const useErrorModal = () => {
  const { t } = useTranslation()

  const closeButtonRef = useRef(null)

  return { closeButtonRef, t }
}
