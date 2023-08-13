import useChangeAvatarModal from './useChangeAvatarModal'
import { ModalWrapper, TabsInPills } from 'components'
import { ChangeAvatarModalProps } from './types'
import { createAvatar } from '@dicebear/core'
import { avatarCollection } from 'CONSTANTS'

const ChangeAvatarModal: React.FC<ChangeAvatarModalProps> = ({
  closeHandler,
  isOpen,
}) => {
  const { user, t, activeTab, setActiveTab } = useChangeAvatarModal()

  return (
    <ModalWrapper
      closeHandler={closeHandler}
      title={t('change_avatar')}
      submitHandler={() => {}}
      submitText={t('change')}
      open={isOpen}
    >
      <>
        <div className='flex justify-center mb-6'>
          <img alt='avatar' className='w-1/4' src={user.image?.url} />
        </div>

        <div className='mb-6'>
          <TabsInPills
            tabs={[t('style'), t('background_color')]}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </div>

        <div className='flex gap-2 flex-wrap'>
          {avatarCollection.map((collectionItem) => {
            const avatar: string = createAvatar(
              collectionItem.collection as any,
              {
                size: 128,
                seed: user.username,
              }
            ).toDataUriSync()

            return (
              <img
                key={collectionItem.title}
                alt={collectionItem.title}
                height={70}
                src={avatar}
                width={70}
              />
            )
          })}
        </div>
      </>
    </ModalWrapper>
  )
}

export default ChangeAvatarModal
