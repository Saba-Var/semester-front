import type { User, Message, UserImage } from 'types'
import { useAxiosPrivate } from 'hooks'
import { AxiosResponse } from 'axios'

export const useUserService = () => {
  const privateAxios = useAxiosPrivate()

  const getUserData = (): Promise<AxiosResponse<User>> => {
    return privateAxios.get('/user')
  }

  const updateUserData = (data: {
    image: UserImage
  }): Promise<AxiosResponse<Message>> => {
    return privateAxios.put('/user', data)
  }

  return { getUserData, updateUserData }
}
