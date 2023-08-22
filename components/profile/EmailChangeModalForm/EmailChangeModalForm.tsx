import { ModalWrapper, TextInputField, SuccessModal } from 'components'
import useEmailChangeModalForm from './useEmailChangeModalForm'
import { EmailChangeModalFormProps } from './types'
import { FormProvider } from 'react-hook-form'

const EmailChangeModalForm: React.FC<EmailChangeModalFormProps> = ({
  setOpen,
  open,
}) => {
  const {
    setShowSuccess,
    submitHandler,
    closeHandler,
    showSuccess,
    isLoading,
    form,
    t,
  } = useEmailChangeModalForm(setOpen)

  return (
    <>
      <SuccessModal
        description={t('profile:email_change_instructions')}
        title={t('profile:email_confirmation_sent')}
        linkActionText={t('auth:go-to-gmail')}
        setSuccess={setShowSuccess}
        show={showSuccess}
        linkAction={true}
      />

      <ModalWrapper
        submitHandler={form.handleSubmit(submitHandler)}
        title={t('profile:change_email')}
        closeHandler={closeHandler}
        disabled={isLoading}
        open={open}
      >
        <FormProvider {...form}>
          <form>
            <TextInputField name='email' label={t('profile:new_email')} />
          </form>
        </FormProvider>
      </ModalWrapper>
    </>
  )
}

export default EmailChangeModalForm
