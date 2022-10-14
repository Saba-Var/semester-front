import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URI,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default instance
