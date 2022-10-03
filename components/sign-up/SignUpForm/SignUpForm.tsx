import { InputField, SubmitButton } from 'components'
import { registrationFormSchema } from 'schemas'
import { Form, Formik } from 'formik'

const SignUpForm = () => {
  return (
    <Formik
      validationSchema={registrationFormSchema}
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={() => {}}
    >
      {() => {
        return (
          <Form className='flex flex-col gap-1'>
            <InputField name='username' type='text' />
            <InputField name='email' type='text' />
            <InputField name='password' type='password' />
            <InputField name='confirmPassword' type='password' />

            <SubmitButton title='sign-up' styles='mt-4' />
          </Form>
        )
      }}
    </Formik>
  )
}

export default SignUpForm
