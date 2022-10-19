import { SignUpFormData, SignInFormData, Message, AccessToken } from 'types'
import { AxiosResponse } from 'axios'
import axios from './axios'

export const registerUSer = (
  data: SignUpFormData
): Promise<AxiosResponse<Message>> => {
  return axios.post('/authentication/sign-up', data)
}

export const authorization = (
  data: SignInFormData
): Promise<AxiosResponse<AccessToken>> => {
  return axios.post('/authentication/sign-in', data, { withCredentials: true })
}

export const refresh = (): Promise<AxiosResponse<AccessToken>> => {
  return axios.get('/authentication/refresh', { withCredentials: true })
}

export const accountActivation = (
  token: string
): Promise<AxiosResponse<Message>> => {
  return axios.put(`/authentication/activate-account?token=${token}`, {
    withCredentials: false,
  })
}
