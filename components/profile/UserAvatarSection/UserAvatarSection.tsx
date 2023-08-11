import useUserAvatarSection from './useUserAvatarSection'
import { Avatar, SecondaryButton } from 'components'

const UserAvatarSection = () => {
  const { avatarSrc } = useUserAvatarSection()

  return (
    <div className='flex justify-center'>
      <Avatar src={avatarSrc}>
        <SecondaryButton title='change text' />
      </Avatar>
    </div>
  )
}

export default UserAvatarSection
