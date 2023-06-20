import { requestsExceed } from 'utils'
import { axiosConfig } from 'config'
import Cookies from 'js-cookie'
import axios from 'axios'

const instance = axios.create(axiosConfig)

instance.interceptors.request.use(
  (config: any) => {
    config.headers['Accept-Language'] = Cookies.get('language')

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  async (response) => {
    return response
  },

  async (error) => {
    if (error?.response?.status === 429) {
      requestsExceed()
    }

    return Promise.reject(error)
  }
)

export default instance
