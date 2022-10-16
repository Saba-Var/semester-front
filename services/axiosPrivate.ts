import axios from 'axios'

const axiosPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URI,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default axiosPrivate
