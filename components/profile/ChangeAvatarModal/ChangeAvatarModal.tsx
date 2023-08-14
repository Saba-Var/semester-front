import { ModalWrapper, TabsInPills, AvatarItem } from 'components'
import useChangeAvatarModal from './useChangeAvatarModal'
import { ChangeAvatarModalProps } from './types'
import { FormProvider } from 'react-hook-form'
import { avatarCollection } from 'CONSTANTS'
import type { CollectionItem } from './types'
import Image from 'next/image'

const ChangeAvatarModal: React.FC<ChangeAvatarModalProps> = ({
  closeHandler,
  isOpen,
}) => {
  const {
    selectedTabPropertiesList,
    availablePropertyNames,
    isUserDataUpdating,
    selectedProperties,
    selectedCollection,
    closeModalHandler,
    previewAvatarSrc,
    submitHandler,
    setActiveTab,
    activeTab,
    user,
    form,
    t,
  } = useChangeAvatarModal(closeHandler)

  return (
    <ModalWrapper
      mainContainerClassName='md:w-[90vw] lg:w-[85vw] 2xl:w-[80vw] xl:w-[90vw] 3xl:w-[60hw]'
      submitHandler={form.handleSubmit(submitHandler)}
      childrenContainerClassName='!mt-0'
      closeHandler={closeModalHandler}
      disabled={isUserDataUpdating}
      title={t('change_avatar')}
      submitText={t('change')}
      open={isOpen}
    >
      <>
        <div className='flex relative h-40 w-40 xl:h-64 xl:w-64 mx-auto justify-center my-4'>
          <Image
            className='rounded-xl'
            src={previewAvatarSrc}
            layout='fill'
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
                      collectionItem={selectedCollection as CollectionItem}
                      key={`${propertyValue}-${i}`}
                      value={propertyValue}
                      fieldName={activeTab}
                      form={form}
                      user={user}
                      properties={{
                        [activeTab]: [propertyValue],
                        ...selectedProperties,
                      }}
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
