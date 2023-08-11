import { useSelector } from 'react-redux'
import { type RootState } from 'store'

const useUserAvatar = () => {
  const user = useSelector((state: RootState) => state.user)

  console.log(user)

  return { user }
}

export default useUserAvatar
