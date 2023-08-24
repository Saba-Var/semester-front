import { ChangeAvatarModal, Button, AvatarImage } from 'components'
import useUserAvatarSection from './useUserAvatarSection'

const UserAvatarSection = () => {
  const { avatarSrc, isAvatarModalOpen, setIsAvatarModalOpen, t, user } =
    useUserAvatarSection()

  return (
    <div className='flex justify-center'>
      <AvatarImage sharedClassName='mb-2' src={avatarSrc}>
        <Button
          onClick={() => setIsAvatarModalOpen(true)}
          title={t('change_avatar')}
          stylesType='soft-btn'
          styles='!h-8'
          fullWidth
        />
      </AvatarImage>

      {user?.image?.collectionName && (
        <ChangeAvatarModal
          closeHandler={() => setIsAvatarModalOpen(false)}
          isOpen={isAvatarModalOpen}
        />
      )}
    </div>
  )
}

export default UserAvatarSection
