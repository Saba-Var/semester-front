import { useAxiosPrivate } from 'hooks'
import { AxiosResponse } from 'axios'
import { User } from 'types'

export const useUserService = () => {
  const privateAxios = useAxiosPrivate()

  const getUserData = (): Promise<AxiosResponse<User>> => {
    return privateAxios.get('/user')
  }

  return { getUserData }
}
