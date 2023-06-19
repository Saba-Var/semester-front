import { useTranslation } from 'next-i18next'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setIsSidebarOpen } from 'slices'
import { useRouter } from 'next/router'
import { RootState } from 'store'
import Cookies from 'js-cookie'

const useDesktopSidebar = () => {
  const lang = (Cookies.get('language') || 'ka') as 'ka' | 'en'
  const { pathname } = useRouter()
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const { isDesktopSideBarOpen } = useSelector(
    (state: RootState) => state.sidebar
  )

  const handleSidebarOpen = () => {
    dispatch(setIsSidebarOpen(!isDesktopSideBarOpen))
  }

  return { pathname, t, lang, isDesktopSideBarOpen, handleSidebarOpen }
}

export default useDesktopSidebar
