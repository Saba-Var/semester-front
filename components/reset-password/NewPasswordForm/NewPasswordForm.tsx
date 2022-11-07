import { InputField, SubmitButton, SuccessModal } from 'components'
import { useNewPasswordForm } from './useNewPasswordForm'
import { resetPasswordSchema } from 'schemas'
import { Form, Formik } from 'formik'
import { useTranslate } from 'hooks'

const NewPasswordForm = () => {
  const {
    logInClickHandler,
    setSuccessModal,
    initialValues,
    submitHandler,
    successModal,
    isLoading,
    t,
  } = useNewPasswordForm()

  return (
    <div>
      <p className='mb-10 text-gray-800 text-base lg:text-lg text-center'>
        {useTranslate('reset:new-password-instruction')}
      </p>

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

      <Formik
        validationSchema={resetPasswordSchema}
        initialValues={initialValues}
        onSubmit={submitHandler}
      >
        {() => {
          return (
            <>
              <Form className='flex flex-col gap-1'>
                <InputField name='password' type='password' />
                <InputField name='confirmPassword' type='password' />

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

export default NewPasswordForm
