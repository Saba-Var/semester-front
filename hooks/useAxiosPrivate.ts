import { useRefreshToken } from './useRefreshToken'
import { requestsExceed, emitToast } from 'utils'
import { useTranslation } from 'next-i18next'
import { useSelector } from 'react-redux'
import { axiosPrivate } from 'services'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { RootState } from 'store'
import Cookies from 'js-cookie'

export const useAxiosPrivate = () => {
  const { accessToken } = useSelector(
    (state: RootState) => state.authentication
  )
  const refresh = useRefreshToken()
  const { t } = useTranslation()
  const router = useRouter()

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: any) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${accessToken}`
        }

        config.headers['Accept-Language'] = Cookies.get('language')

        return config
      },

      (error) => {
        return Promise.reject(error)
      }
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => {
        return response
      },

      async (error) => {
        if (error?.response?.status === 500) {
          emitToast(t('something_went_wrong'), 'error')
        }

        const prevRequest = error?.config
        const status = error?.response?.status

        if (status === 429) {
          requestsExceed()
        }

        if (status === 401 && !prevRequest?.sent) {
          const accessToken = await refresh()

          if (!accessToken) {
            router.push('/overview')
          }

          prevRequest.sent = true
          prevRequest.headers['Authorization'] = `Bearer ${accessToken}`
          return axiosPrivate(prevRequest)
        }

        return Promise.reject(error)
      }
    )

    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept)
      axiosPrivate.interceptors.request.eject(requestIntercept)
    }
  }, [accessToken, refresh, router, t])

  return axiosPrivate
}
