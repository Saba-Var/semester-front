import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import Cookies from 'js-cookie'

export const useSidebarLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const lang = (Cookies.get('language') || 'ka') as 'ka' | 'en'

  const { t } = useTranslation()

  return { sidebarOpen, setSidebarOpen, t, lang }
}
