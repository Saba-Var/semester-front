import { useDispatch } from 'react-redux'
import { setAccessToken } from 'slices'
import { refresh } from 'services'

export const useRefreshToken = () => {
  const dispatch = useDispatch()

  const refreshToken = async () => {
    try {
      const response = await refresh()

      dispatch(setAccessToken(response?.data?.accessToken))

      return response?.data?.accessToken
    } catch (error: any) {
      alert(error?.message)
    }
  }

  return refreshToken
}
