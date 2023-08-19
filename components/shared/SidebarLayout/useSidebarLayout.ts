import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { setIsSidebarOpen } from 'slices'
import { useMutation } from 'react-query'
import { useGetUserData } from 'hooks'
import { useRouter } from 'next/router'
import { RootState } from 'store'
import { logout } from 'services'
import Cookies from 'js-cookie'

export const useSidebarLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { accessToken } = useSelector(
    (state: RootState) => state.authentication
  )
  const { isDesktopSideBarOpen } = useSelector(
    (state: RootState) => state.sidebar
  )

  const { user } = useGetUserData()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const router = useRouter()

  const lang = (Cookies.get('language') || 'ka') as 'ka' | 'en'
  const userId = Cookies.get('_id')

  useEffect(() => {
    if (!userId) {
      router.push('/overview')
    }
  }, [router, userId])

  useEffect(() => {
    const isDesktopSideBarOpen =
      localStorage.getItem('isDesktopSideBarOpen') === 'true'

    dispatch(setIsSidebarOpen(isDesktopSideBarOpen))
  }, [dispatch])

  const { mutate: logoutMutation } = useMutation(logout, {
    onSuccess: () => {
      Cookies.remove('_id')
      router.push('/overview')
    },
  })

  return {
    canViewPage: !!accessToken && !!userId,
    pathname: router.pathname,
    isDesktopSideBarOpen,
    logoutMutation,
    setSidebarOpen,
    sidebarOpen,
    router,
    user,
    lang,
    t,
  }
}
