import { useResetPasswordRequestForm } from './useResetPasswordRequestForm'
import { InputField, SubmitButton, SuccessModal } from 'components'
import { FormProvider } from 'react-hook-form'

const ResetPasswordRequestForm = () => {
  const {
    setSuccessModal,
    submitHandler,
    handleSubmit,
    successModal,
    isLoading,
    form,
    t,
  } = useResetPasswordRequestForm()

  return (
    <>
      {successModal && (
        <SuccessModal
          linkActionText={t('auth:go-to-gmail')}
          description={t('reset:check-email')}
          title={t('reset:reset-lin-sent')}
          actionText='reset:reset-password'
          setSuccess={setSuccessModal}
          isSuccess={successModal}
          linkAction={true}
          closeWithOverlay
        />
      )}

      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className='flex flex-col gap-1'
        >
          <InputField name='email' type='text' />

          <SubmitButton disabled={isLoading} title='continue' styles='mt-4' />
        </form>
      </FormProvider>
    </>
  )
}

export default ResetPasswordRequestForm
