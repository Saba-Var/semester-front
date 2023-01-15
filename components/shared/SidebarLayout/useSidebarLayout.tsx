import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useUserService } from 'hooks'
import { RootState } from 'store'
import Cookies from 'js-cookie'

export const useSidebarLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const { accessToken } = useSelector(
    (state: RootState) => state.authentication
  )

  const { getUserData } = useUserService()

  const router = useRouter()

  const userId = Cookies.get('id')

  useEffect(() => {
    if (!userId) {
      router.push('/overview')
    }
  }, [router, userId])

  const { data } = useQuery('user', getUserData)

  const lang = (Cookies.get('language') || 'ka') as 'ka' | 'en'

  const { t } = useTranslation()

  return {
    canViewPage: !!accessToken && !!userId,
    setSidebarOpen,
    sidebarOpen,
    lang,
    t,
  }
}
