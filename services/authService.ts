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
  return axios.post('/authentication/sign-in', data)
}
