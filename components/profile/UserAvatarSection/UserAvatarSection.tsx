import { ChangeAvatarModal, CustomButton, AvatarImage } from 'components'
import useUserAvatarSection from './useUserAvatarSection'

const UserAvatarSection = () => {
  const { avatarSrc, isAvatarModalOpen, setIsAvatarModalOpen, t } =
    useUserAvatarSection()

  return (
    <div className='flex justify-center'>
      <AvatarImage src={avatarSrc}>
        <CustomButton
          onClick={() => setIsAvatarModalOpen(true)}
          title={t('change_avatar')}
          type='soft-btn'
        />
      </AvatarImage>

      <ChangeAvatarModal
        closeHandler={() => setIsAvatarModalOpen(false)}
        isOpen={isAvatarModalOpen}
      />
    </div>
  )
}

export default UserAvatarSection
