import { SubmitButton, SuccessModal, InputField } from 'components'
import { useSignUpForm } from './useSignUpForm'
import { signUpSchema } from 'schemas'
import { Form, Formik } from 'formik'

const SignUpForm = () => {
  const { formInitialValues, submitHandler, signUpSuccess } = useSignUpForm()

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={signUpSchema}
      onSubmit={submitHandler}
    >
      {() => {
        return (
          <>
            {signUpSuccess && <SuccessModal />}

            <Form className='flex flex-col gap-1'>
              <InputField name='username' type='text' />
              <InputField name='email' type='text' />
              <InputField name='password' type='password' />
              <InputField name='confirmPassword' type='password' />

              <SubmitButton title='sign-up' styles='mt-4' />
            </Form>
          </>
        )
      }}
    </Formik>
  )
}

export default SignUpForm
