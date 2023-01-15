import { axiosConfig } from 'config'
import Cookies from 'js-cookie'
import axios from 'axios'

const instance = axios.create(axiosConfig)

instance.interceptors.response.use(
  async (response) => {
    return response
  },

  async (error) => {
    if (error?.response?.status === 429) {
      const userLanguage = Cookies.get('language')
      location.assign(`${userLanguage === 'en' ? '/en' : ''}/requests-exceed`)
    }

    return Promise.reject(error)
  }
)

export default instance
