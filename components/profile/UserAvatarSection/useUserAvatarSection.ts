import { useSelector } from 'react-redux'
import type { RootState } from 'store'

const useUserAvatarSection = () => {
  const user = useSelector((state: RootState) => state.user)

  return {
    avatarSrc: user.image?.url,
  }
}

export default useUserAvatarSection
