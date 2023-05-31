import {
  TextInputField,
  SubmitButton,
  SuccessModal,
  ErrorModal,
} from 'components'
import { useNewPasswordForm } from './useNewPasswordForm'
import { FormProvider } from 'react-hook-form'

const NewPasswordForm = () => {
  const {
    logInClickHandler,
    setSuccessModal,
    submitHandler,
    setFetchError,
    handleSubmit,
    successModal,
    fetchError,
    isLoading,
    form,
    t,
  } = useNewPasswordForm()

  return (
    <>
      {successModal && (
        <SuccessModal
          description={t('auth:reset-success-text')}
          title={t('auth:password-reset-success')}
          clickHandler={logInClickHandler}
          actionText={t('auth:log-in')}
          setSuccess={setSuccessModal}
          isSuccess={successModal}
          closeWithOverlay
        />
      )}

      {fetchError && (
        <ErrorModal
          description={t('reset:reset-fail-description')}
          title={t('reset:reset-fail')}
          setShowModal={setFetchError}
          showModal={fetchError}
        />
      )}

      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className='flex flex-col gap-1'
        >
          <TextInputField name='password' type='password' />
          <TextInputField name='confirmPassword' type='password' />

          <SubmitButton
            title='reset-password'
            disabled={isLoading}
            styles='mt-4'
          />
        </form>
      </FormProvider>
    </>
  )
}

export default NewPasswordForm
