import useChangeAvatarModal from './useChangeAvatarModal'
import * as collection from '@dicebear/collection'
import { ChangeAvatarModalProps } from './types'
import { createAvatar } from '@dicebear/core'
import { ModalWrapper } from 'components'

const ChangeAvatarModal: React.FC<ChangeAvatarModalProps> = ({
  closeHandler,
  isOpen,
}) => {
  const { t } = useChangeAvatarModal()

  return (
    <ModalWrapper
      closeHandler={closeHandler}
      title={t('change_avatar')}
      submitHandler={() => {}}
      submitText={t('change')}
      open={isOpen}
    >
      <div className='flex gap-2 flex-wrap'>
        {Object.keys(collection).map((key) => {
          const avatar = createAvatar(collection[key], {
            size: 128,
          }).toDataUriSync()

          return (
            <img
              key={key}
              width={100}
              height={100}
              src={avatar}
              alt={`Avatar ${key}`}
            />
          )
        })}
      </div>
    </ModalWrapper>
  )
}

export default ChangeAvatarModal
