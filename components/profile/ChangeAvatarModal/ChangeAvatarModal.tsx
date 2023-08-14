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
    propertiesList,
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
      submitHandler={form.handleSubmit((data) => {
        console.log(data)
      })}
      submitText={t('change')}
      open={isOpen}
      containerClassName='!mt-0'
    >
      <>
        <div className='flex relative justify-center my-4'>
          <img
            className='w-1/4 rounded-xl'
            src={previewAvatarSrc}
            alt='avatar'
          />
        </div>

        <div className='mb-3 h-12'>
          <TabsInPills
            tabs={['style', ...availablePropertyNames]}
            translationLocation='profile'
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </div>

        <FormProvider {...form}>
          <form
            className={`py-4 h-[28.5rem] items-start grid grid-cols-5 gap-5 overflow-y-auto pl-2 pr-4 ${
              avatarCollection.length > 4 && ''
            }`}
          >
            {activeTab === 'style'
              ? avatarCollection.map((collectionItem, i) => {
                  return (
                    <AvatarItem
                      collectionItem={collectionItem}
                      properties={selectedProperties}
                      value={collectionItem.title}
                      key={`${collectionItem.title}-${i}`}
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
