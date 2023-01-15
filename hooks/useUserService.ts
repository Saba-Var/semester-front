import { useAxiosPrivate } from 'hooks'
import { AxiosResponse } from 'axios'
import { Message } from 'types'
import Cookies from 'js-cookie'

export const useUserService = () => {
  const privateAxios = useAxiosPrivate()

  const userId = Cookies.get('id')

  const getUserData = (): Promise<AxiosResponse<Message>> => {
    return privateAxios.get(`/user/${userId}`)
  }

  return { getUserData }
}
