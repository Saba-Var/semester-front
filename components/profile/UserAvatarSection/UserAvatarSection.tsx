import useUserAvatarSection from './useUserAvatarSection'
import { Avatar, CustomButton, ModalWrapper } from 'components'

const UserAvatarSection = () => {
  const { avatarSrc, isAvatarModalOpen, setIsAvatarModalOpen, t } =
    useUserAvatarSection()

  return (
    <div className='flex justify-center'>
      <Avatar src={avatarSrc}>
        <CustomButton
          onClick={() => setIsAvatarModalOpen(true)}
          title={t('change_avatar')}
          type='soft-btn'
        />
      </Avatar>

      <ModalWrapper
        closeHandler={() => setIsAvatarModalOpen(false)}
        title={t('change_avatar')}
        open={isAvatarModalOpen}
        submitHandler={() => {}}
      >
        <div>Hello</div>
      </ModalWrapper>
    </div>
  )
}

export default UserAvatarSection
