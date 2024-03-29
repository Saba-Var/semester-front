import { LoginResponseData } from './types.d'
import { AxiosResponse } from 'axios'
import axios from './axios'
import {
  SignUpFormValues,
  SignInformValues,
  ResetPasswordReq,
  AccessToken,
  Message,
  Email,
} from 'types'

export const registerUSer = (
  data: SignUpFormValues
): Promise<AxiosResponse<Message>> => {
  return axios.post('/authentication/sign-up', data)
}

export const authorization = (
  data: SignInformValues
): Promise<AxiosResponse<LoginResponseData>> => {
  return axios.post('/authentication/sign-in', data)
}

export const refresh = (): Promise<AxiosResponse<AccessToken>> => {
  return axios.get('/authentication/refresh')
}

export const accountActivation = (
  token: string
): Promise<AxiosResponse<Message>> => {
  return axios.post(`/authentication/activate-account?token=${token}`, {
    withCredentials: false,
  })
}

export const resetPasswordEmailReq = (
  data: Email
): Promise<AxiosResponse<Message>> => {
  return axios.get(`/authentication/change-password?email=${data.email}`)
}

export const resetPassword = (
  data: ResetPasswordReq
): Promise<AxiosResponse<Message>> => {
  return axios.put(
    `/authentication/change-password?accessToken=${data.accessToken}`,
    data
  )
}

export const logout = (): Promise<AxiosResponse<Message>> => {
  return axios.get('/authentication/logout')
}
