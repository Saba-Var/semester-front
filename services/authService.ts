import { SignUpFormData, Status } from 'types'
import { AxiosResponse } from 'axios'
import axios from './axios'

export const registerUSer = (
  data: SignUpFormData
): Promise<AxiosResponse<Status>> => {
  return axios.post('/authentication/sign-up', data)
}
