import { ModalWrapper, TabsInPills, AvatarItem } from 'components'
import useChangeAvatarModal from './useChangeAvatarModal'
import { ChangeAvatarModalProps } from './types'
import { FormProvider } from 'react-hook-form'
import { avatarCollection } from 'CONSTANTS'

const ChangeAvatarModal: React.FC<ChangeAvatarModalProps> = ({
  closeHandler,
  isOpen,
}) => {
  const { user, t, activeTab, setActiveTab, form } = useChangeAvatarModal()

  return (
    <ModalWrapper
      closeHandler={closeHandler}
      title={t('change_avatar')}
      submitHandler={form.handleSubmit((data) => {
        console.log(data)
      })}
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

        <FormProvider {...form}>
          <form className='flex gap-2 flex-wrap'>
            {avatarCollection.map((collectionItem) => {
              return (
                <AvatarItem
                  collectionItem={collectionItem}
                  key={collectionItem.title}
                  form={form}
                  user={user}
                />
              )
            })}
          </form>
        </FormProvider>
      </>
    </ModalWrapper>
  )
}

export default ChangeAvatarModal
