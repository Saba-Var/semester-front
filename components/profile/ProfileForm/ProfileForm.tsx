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
          <ProfileInputWrapper
            showEditButton={disabledInputFields.username}
            onClick={() => enableInputEdit('username')}
          >
            <TextInputField
              disabled={disabledInputFields.username}
              name='username'
            />
          </ProfileInputWrapper>

          <ProfileInputWrapper onClick={() => enableInputEdit('email')}>
            <TextInputField name='email' disabled />
          </ProfileInputWrapper>

          <ProfileInputWrapper
            showEditButton={disabledInputFields.password}
            onClick={() => enableInputEdit('password')}
          >
            <TextInputField
              placeholder='***************'
              showEyeIcon={false}
              name='password'
              type='password'
              disabled
            />
          </ProfileInputWrapper>

          {!disabledInputFields.password && (
            <>
              <ProfileInputWrapper showEditButton={false}>
                <div className='mb-5 border w-full p-6 rounded-md shadow-sm'>
                  <p>Passwords should contain:</p>

                  <ul>
                    <li className='flex text-gray-500 items-center gap-2'>
                      <div className='text-sm text-gray-500'>&#9679;</div>
                      <div>6 or more characters</div>
                    </li>

                    <li className='flex text-gray-500 items-center gap-2'>
                      <div className='text-sm text-gray-500'>&#9679;</div>
                      <div>Uppercase and lowercase characters</div>
                    </li>

                    <li className='flex text-gray-500 items-center gap-2'>
                      <div className='text-sm text-gray-500'>&#9679;</div>
                      <div>At least 1 symbol</div>
                    </li>
                  </ul>
                </div>
              </ProfileInputWrapper>

              <ProfileInputWrapper showEditButton={false}>
                <TextInputField
                  label={t('inputs:current_password')}
                  name='oldPassword'
                  type='password'
                />
              </ProfileInputWrapper>

              <ProfileInputWrapper showEditButton={false}>
                <TextInputField
                  label={t('inputs:new_password')}
                  name='newPassword'
                  type='password'
                />
              </ProfileInputWrapper>

              <ProfileInputWrapper showEditButton={false}>
                <TextInputField
                  label={t('inputs:confirm_new_password')}
                  name='confirmPassword'
                  type='password'
                />
              </ProfileInputWrapper>
            </>
          )}

          {disabledInputFields.showFormActionButtons && (
            <ProfileInputWrapper showEditButton={false}>
              <div className='flex gap-4 items-center mt-10 w-[50%] ml-auto'>
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
                  title='save'
                />
              </div>
            </ProfileInputWrapper>
          )}
        </form>
      </FormProvider>
    </>
  )
}

export default ProfileForm
