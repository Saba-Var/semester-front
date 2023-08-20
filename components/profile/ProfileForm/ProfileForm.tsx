import { FormProvider } from 'react-hook-form'
import useProfileForm from './useProfileForm'
import {
  ProfileInputWrapper,
  TextInputField,
  SubmitButton,
  CustomButton,
} from 'components'

const ProfileForm = () => {
  const {
    setDisabledInputFields,
    disableAllInputFields,
    disabledInputFields,
    isUserDataUpdating,
    enableInputEdit,
    submitHandler,
    handleSubmit,
    form,
    t,
  } = useProfileForm()

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(submitHandler)} className='mt-8'>
          <ProfileInputWrapper onClick={() => enableInputEdit('username')}>
            <TextInputField
              disabled={disabledInputFields.username}
              name='username'
            />
          </ProfileInputWrapper>

          <ProfileInputWrapper onClick={() => enableInputEdit('email')}>
            <TextInputField name='email' disabled />
          </ProfileInputWrapper>

          <ProfileInputWrapper onClick={() => enableInputEdit('password')}>
            <TextInputField
              placeholder='***************'
              showEyeIcon={false}
              name='password'
              type='password'
              disabled
            />
          </ProfileInputWrapper>

          {disabledInputFields.showFormActionButtons && (
            <div className='flex gap-4 items-center mt-10'>
              <CustomButton
                onClick={() => {
                  disableAllInputFields()
                  form.reset()
                }}
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
