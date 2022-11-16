import { SubmitButton, SuccessModal, InputField } from 'components'
import { useSignUpForm } from './useSignUpForm'
import { signUpSchema } from 'schemas'
import { Form, Formik } from 'formik'

const SignUpForm = () => {
  const {
    formInitialValues,
    setSignUpSuccess,
    userRegistering,
    submitHandler,
    signUpSuccess,
    t,
  } = useSignUpForm()

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={signUpSchema}
      onSubmit={submitHandler}
    >
      {() => {
        return (
          <>
            {signUpSuccess && (
              <SuccessModal
                description={t('auth:confirmation-instructions')}
                linkActionText={t('auth:go-to-gmail')}
                title={t('auth:confirmation-sent')}
                setSuccess={setSignUpSuccess}
                isSuccess={signUpSuccess}
                linkAction={true}
              />
            )}

            <Form className='flex flex-col gap-1'>
              <InputField name='username' type='text' />
              <InputField name='email' type='text' />
              <InputField name='password' type='password' />
              <InputField name='confirmPassword' type='password' />

              <SubmitButton
                disabled={userRegistering}
                title='sign-up'
                styles='mt-4'
              />
            </Form>
          </>
        )
      }}
    </Formik>
  )
}

export default SignUpForm
