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
    selectedTabPropertiesList,
    availablePropertyNames,
    selectedProperties,
    selectedCollection,
    previewAvatarSrc,
    submitHandler,
    setActiveTab,
    activeTab,
    user,
    form,
    t,
  } = useChangeAvatarModal()

  return (
    <ModalWrapper
      closeHandler={() => {
        setActiveTab('style')
        closeHandler()
        form.reset()
      }}
      title={t('change_avatar')}
      mainContainerClassName='md:w-[90vw] lg:w-[85vw] 2xl:w-[80vw] xl:w-[90vw] 3xl:w-[60hw]'
      submitHandler={form.handleSubmit(submitHandler)}
      childrenContainerClassName='!mt-0'
      submitText={t('change')}
      open={isOpen}
    >
      <>
        <div className='flex relative justify-center my-4'>
          <img
            className='w-[15rem] 2xl:w-1/6 rounded-xl'
            src={previewAvatarSrc}
            alt='avatar'
          />
        </div>

        <div className='mb-3 h-12'>
          <TabsInPills
            tabs={availablePropertyNames}
            translationLocation='profile'
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </div>

        <FormProvider {...form}>
          <form
            className={`py-4 h-[19rem] items-start lg:grid-cols-4 xl:grid-cols-5 xl:justify-items-start grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-8 gap-5 overflow-y-auto pl-2 2xl:pr-4 ${
              avatarCollection.length > 4 && ''
            }`}
          >
            {activeTab === 'style'
              ? avatarCollection.map((collectionItem, i) => {
                  return (
                    <AvatarItem
                      key={`${collectionItem.title}-${i}`}
                      collectionItem={collectionItem}
                      properties={selectedProperties}
                      value={collectionItem.title}
                      fieldName={'style'}
                      form={form}
                      user={user}
                    />
                  )
                })
              : selectedTabPropertiesList?.map((propertyValue, i) => {
                  return (
                    <AvatarItem
                      key={`${propertyValue}-${i}`}
                      properties={{
                        [activeTab]: [propertyValue],
                        ...selectedProperties,
                      }}
                      collectionItem={selectedCollection}
                      value={propertyValue}
                      fieldName={activeTab}
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
