import { FormProvider } from 'react-hook-form'
import useProfileForm from './useProfileForm'
import {
  EmailChangeModalForm,
  ProfileInputWrapper,
  PasswordRequirement,
  EmailActivation,
  TextInputField,
  Button,
} from 'components'

const ProfileForm = () => {
  const {
    setShowEmailChangeModal,
    disableAllInputFields,
    newPasswordValidation,
    showEmailChangeModal,
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
      <EmailChangeModalForm
        setOpen={setShowEmailChangeModal}
        open={showEmailChangeModal}
      />

      <EmailActivation profileForm={form} />

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

          <ProfileInputWrapper
            onClick={() => setShowEmailChangeModal(true)}
            showEditButton={!showEmailChangeModal}
          >
            <TextInputField name='email' disabled />
          </ProfileInputWrapper>

          <ProfileInputWrapper
            showEditButton={disabledInputFields.passwordChange}
            onClick={() => enableInputEdit('passwordChange')}
          >
            <TextInputField
              placeholder='***************'
              showEyeIcon={false}
              name='password'
              type='password'
              disabled
            />
          </ProfileInputWrapper>

          {!disabledInputFields.passwordChange && (
            <>
              <ProfileInputWrapper showEditButton={false}>
                <div className='mb-5 border w-full p-6 rounded-md shadow-sm'>
                  <p className='text-lg text-gray-700'>
                    {t('inputs:new_password_should_contain')}:
                  </p>

                  <ul>
                    <PasswordRequirement
                      title={t('inputs:6_or_more_characters')}
                      isValid={newPasswordValidation.length}
                    />
                    <PasswordRequirement
                      isValid={newPasswordValidation.hasUpperCaseChar}
                      title={t('inputs:uppercase_character')}
                    />
                    <PasswordRequirement
                      isValid={newPasswordValidation.hasLowerCaseChar}
                      title={t('inputs:lowercase_character')}
                    />
                    <PasswordRequirement
                      isValid={newPasswordValidation.hasSymbol}
                      title={t('inputs:at_least_one_symbol')}
                    />
                  </ul>
                </div>
              </ProfileInputWrapper>

              <ProfileInputWrapper showEditButton={false}>
                <TextInputField
                  label={t('inputs:current_password')}
                  autoComplete='new-password'
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
              <div className='grid grid-cols-2 gap-4 items-center justify-items-center mb-6 w-full mt-2 sm:mt-4 ml-auto'>
                <Button
                  onClick={() => {
                    disableAllInputFields()
                    form.reset()
                  }}
                  stylesType='secondary-btn'
                  title={t('cancel')}
                  fullWidth
                />

                <Button
                  disabled={isUserDataUpdating}
                  title={t('inputs:save')}
                  showLoadingIndicator
                  type='submit'
                  fullWidth
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
