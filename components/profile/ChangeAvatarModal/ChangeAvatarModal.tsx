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
    selectedCollection,
    previewAvatarSrc,
    propertiesList,
    setActiveTab,
    avatarStyle,
    activeTab,
    user,
    form,
    t,
  } = useChangeAvatarModal()

  return (
    <ModalWrapper
      closeHandler={() => {
        form.reset()
        setActiveTab('style')
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
            tabs={['style', ...availablePropertyNames]}
            translationLocation='profile'
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
            {activeTab === 'style'
              ? avatarCollection.map((collectionItem) => {
                  return (
                    <AvatarItem
                      collectionItem={collectionItem}
                      value={collectionItem.title}
                      key={collectionItem.title}
                      fieldName={'style'}
                      properties={{}}
                      form={form}
                      user={user}
                    />
                  )
                })
              : selectedTabPropertiesList?.map((propertyValue, i) => {
                  return (
                    <div key={`${propertyValue}-${i}`}>
                      <AvatarItem
                        properties={{ [activeTab]: [propertyValue] }}
                        collectionItem={selectedCollection}
                        value={propertyValue}
                        fieldName={activeTab}
                        form={form}
                        user={user}
                      />
                      {propertyValue}
                    </div>
                  )
                })}
          </form>
        </FormProvider>
      </>
    </ModalWrapper>
  )
}

export default ChangeAvatarModal
