import { requestsExceed } from 'utils'
import { axiosConfig } from 'config'
import axios from 'axios'

const instance = axios.create(axiosConfig)

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
