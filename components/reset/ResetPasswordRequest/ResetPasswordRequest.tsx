import { useResetPasswordRequest } from './useResetPasswordRequest'
import { InputField, SubmitButton, SuccessModal } from 'components'
import { emailSchema } from 'schemas'
import { Form, Formik } from 'formik'
import { useTranslate } from 'hooks'

const ResetPasswordRequest = () => {
  const {
    setSuccessModal,
    initialValues,
    submitHandler,
    successModal,
    isLoading,
    t,
  } = useResetPasswordRequest()

  return (
    <div>
      <p className='mb-10 text-gray-800 text-base lg:text-lg text-center'>
        {useTranslate('reset:reset-instruction')}
      </p>

      <Formik
        validationSchema={emailSchema}
        initialValues={initialValues}
        onSubmit={submitHandler}
      >
        {() => {
          return (
            <>
              {successModal && (
                <SuccessModal
                  description={t('reset:check-email')}
                  actionText={t('auth:go-to-gmail')}
                  title={t('reset:reset-lin-sent')}
                  setSuccess={setSuccessModal}
                  isSuccess={successModal}
                  linkAction={true}
                  closeWithOverlay
                />
              )}

              <Form className='flex flex-col gap-1'>
                <InputField name='email' type='text' />

                <SubmitButton
                  disabled={isLoading}
                  title='continue'
                  styles='mt-4'
                />
              </Form>
            </>
          )
        }}
      </Formik>
    </div>
  )
}

export default ResetPasswordRequest
