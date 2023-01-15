export const axiosConfig = {
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URI,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
}
