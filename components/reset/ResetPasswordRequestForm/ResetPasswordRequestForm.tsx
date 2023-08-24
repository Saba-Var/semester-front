import { useResetPasswordRequestForm } from './useResetPasswordRequestForm'
import { TextInputField, SuccessModal, Button } from 'components'
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
      <SuccessModal
        linkActionText={t('auth:go-to-gmail')}
        description={t('reset:check-email')}
        title={t('reset:reset-lin-sent')}
        actionText='reset:reset-password'
        setSuccess={setSuccessModal}
        show={successModal}
        linkAction={true}
        closeWithOverlay
      />

      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className='flex flex-col gap-1'
        >
          <TextInputField name='email' />

          <Button
            title={t('inputs:continue')}
            disabled={isLoading}
            showLoadingIndicator
            styles='mt-4'
            type='submit'
          />
        </form>
      </FormProvider>
    </>
  )
}

export default ResetPasswordRequestForm
