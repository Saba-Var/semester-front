import useEmailChangeModalForm from './useEmailChangeModalForm'
import { ModalWrapper, TextInputField } from 'components'
import { EmailChangeModalFormProps } from './types'
import { FormProvider } from 'react-hook-form'

const EmailChangeModalForm: React.FC<EmailChangeModalFormProps> = ({
  setOpen,
  open,
}) => {
  const { t, form, closeHandler, submitHandler } =
    useEmailChangeModalForm(setOpen)

  return (
    <ModalWrapper
      submitHandler={form.handleSubmit(submitHandler)}
      title={t('profile:change_email')}
      closeHandler={closeHandler}
      open={open}
    >
      <FormProvider {...form}>
        <form>
          <TextInputField name='email' label={t('profile:new_email')} />
        </form>
      </FormProvider>
    </ModalWrapper>
  )
}

export default EmailChangeModalForm
