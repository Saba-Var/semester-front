import Cookies from 'js-cookie'
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URI,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

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
