import { useTranslation } from 'next-i18next'
import Cookies from 'js-cookie'

const useDashboardNavigation = () => {
  const { t } = useTranslation('dashboard')
  const { language } = Cookies.get()

  return { t, language }
}

export default useDashboardNavigation
