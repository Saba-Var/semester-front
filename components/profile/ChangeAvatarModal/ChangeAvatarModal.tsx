import useChangeAvatarModal from './useChangeAvatarModal'
import { ChangeAvatarModalProps } from './types'
import { createAvatar } from '@dicebear/core'
import { avatarCollection } from 'CONSTANTS'
import { ModalWrapper } from 'components'

const ChangeAvatarModal: React.FC<ChangeAvatarModalProps> = ({
  closeHandler,
  isOpen,
}) => {
  const { user, t } = useChangeAvatarModal()

  return (
    <ModalWrapper
      closeHandler={closeHandler}
      title={t('change_avatar')}
      submitHandler={() => {}}
      submitText={t('change')}
      open={isOpen}
    >
      <div className='flex gap-2 flex-wrap'>
        {avatarCollection.map((collectionItem) => {
          const avatar = createAvatar(collectionItem.collection as any, {
            size: 128,
            seed: user.username,
          }).toDataUriSync()

          return (
            <img
              key={collectionItem.title}
              alt={collectionItem.title}
              height={100}
              src={avatar}
              width={100}
            />
          )
        })}
      </div>
    </ModalWrapper>
  )
}

export default ChangeAvatarModal
