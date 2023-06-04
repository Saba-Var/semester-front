import { useAxiosPrivate } from 'hooks'
import { AxiosResponse } from 'axios'
import { Message } from 'types'

export const useUserService = () => {
  const privateAxios = useAxiosPrivate()

  const getUserData = (): Promise<AxiosResponse<Message>> => {
    return privateAxios.get('/user')
  }

  return { getUserData }
}
