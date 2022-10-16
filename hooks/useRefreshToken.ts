import { useDispatch } from 'react-redux'
import { setAccessToken } from 'slices'
import { axios } from 'services'

const useRefreshToken = () => {
  const dispatch = useDispatch()

  const refresh = async () => {
    try {
      const response = await axios.get('/authentication/refresh', {
        withCredentials: true,
      })

      dispatch(setAccessToken(response.data.accessToken))

      return response.data.accessToken
    } catch (error: any) {
      alert(error.message)
      console.log(error)
    }
  }

  return refresh
}

export default useRefreshToken
