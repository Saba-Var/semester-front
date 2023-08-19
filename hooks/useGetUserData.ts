import { useUserService } from 'hooks'
import { useQuery } from 'react-query'

export const useGetUserData = () => {
  const { getUserData } = useUserService()

  const { data } = useQuery('user', getUserData)

  return { user: data?.data }
}
