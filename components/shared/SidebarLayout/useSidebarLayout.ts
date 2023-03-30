import { useQuery, useMutation } from 'react-query'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useUserService } from 'hooks'
import { RootState } from 'store'
import { logout } from 'services'
import Cookies from 'js-cookie'

export const useSidebarLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { accessToken } = useSelector(
    (state: RootState) => state.authentication
  )

  const { getUserData } = useUserService()
  const { t } = useTranslation()
  const router = useRouter()

  const lang = (Cookies.get('language') || 'ka') as 'ka' | 'en'
  const userId = Cookies.get('id')

  useEffect(() => {
    if (!userId) {
      router.push('/overview')
    }
  }, [router, userId])

  const { data } = useQuery('user', getUserData)

  const { mutate: logoutMutation } = useMutation(logout, {
    onSuccess: () => {
      Cookies.remove('id')
      router.push('/overview')
    },
  })

  return {
    canViewPage: !!accessToken && !!userId,
    logoutMutation,
    setSidebarOpen,
    sidebarOpen,
    lang,
    t,
  }
}
