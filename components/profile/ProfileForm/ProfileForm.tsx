import { TextInputField, SubmitButton, CustomButton } from 'components'
import { FormProvider } from 'react-hook-form'
import useProfileForm from './useProfileForm'

const ProfileForm = () => {
  const {
    setDisabledInputFields,
    disableAllInputFields,
    disabledInputFields,
    isUserDataUpdating,
    submitHandler,
    handleSubmit,
    form,
    t,
  } = useProfileForm()

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(submitHandler)} className='mt-8'>
          <TextInputField
            disabled={disabledInputFields.username}
            name='username'
          />

          <TextInputField name='email' disabled />

          <TextInputField
            placeholder='***************'
            showEyeIcon={false}
            name='password'
            type='password'
            disabled
          />

          {disabledInputFields.showFormActionButtons && (
            <div className='flex gap-4 items-center mt-10'>
              <CustomButton
                onClick={disableAllInputFields}
                stylesType='secondary-btn'
                title={t('cancel')}
                styles='h-12.5'
              />

              <SubmitButton
                showLoadingIndicator={isUserDataUpdating}
                disabled={isUserDataUpdating}
                title='update'
              />
            </div>
          )}
        </form>
      </FormProvider>
    </>
  )
}

export default ProfileForm
