import { ModalWrapper, TabsInPills, AvatarItem } from 'components'
import useChangeAvatarModal from './useChangeAvatarModal'
import { ChangeAvatarModalProps } from './types'
import { FormProvider } from 'react-hook-form'
import { avatarCollection } from 'CONSTANTS'

const ChangeAvatarModal: React.FC<ChangeAvatarModalProps> = ({
  closeHandler,
  isOpen,
}) => {
  const {
    user,
    t,
    activeTab,
    setActiveTab,
    form,
    avatarStyle,
    availablePropertyNames,
  } = useChangeAvatarModal()

  return (
    <ModalWrapper
      closeHandler={() => {
        form.reset()
        setActiveTab(t('style'))
        closeHandler()
      }}
      title={t('change_avatar')}
      submitHandler={form.handleSubmit((data) => {
        console.log(data)
      })}
      submitText={t('change')}
      open={isOpen}
      containerClassName='!mt-0'
    >
      <>
        <div className='flex relative justify-center mb-3'>
          <img alt='avatar' className='w-1/3' src={user.image?.url} />
        </div>

        <div className='mb-3 h-12'>
          <TabsInPills
            tabs={[t('style'), ...availablePropertyNames]}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </div>

        <FormProvider {...form}>
          <form
            className={`py-4 max-h-[25rem] grid grid-cols-5 gap-3 overflow-y-auto pl-1 pr-4 ${
              avatarCollection.length > 4 && ''
            }`}
          >
            {activeTab === t('style') &&
              avatarCollection.map((collectionItem) => {
                return (
                  <AvatarItem
                    fieldName={
                      activeTab === t('style') ? 'style' : collectionItem.title
                    }
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
