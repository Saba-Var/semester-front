import axios from 'axios'

// TODO: move into config
const axiosPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URI,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default axiosPrivate
