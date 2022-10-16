import useRefreshToken from './useRefreshToken'
import { useSelector } from 'react-redux'
import { axiosPrivate } from 'services'
import { useEffect } from 'react'
import { RootState } from 'store'

const useAxiosPrivate = () => {
  const { accessToken } = useSelector(
    (state: RootState) => state.authentication
  )
  const refresh = useRefreshToken()

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: any) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${accessToken}`
        }

        return config
      },
      (error) => Promise.reject(error)
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true

          const newAccessToken = await refresh()
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`

          return axiosPrivate(prevRequest)
        }

        return Promise.reject(error)
      }
    )

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept)
      axiosPrivate.interceptors.response.eject(responseIntercept)
    }
  }, [accessToken, refresh])

  return axiosPrivate
}

export default useAxiosPrivate
