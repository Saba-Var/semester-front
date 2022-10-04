import { useLogInForm } from './useLogInForm'
import { logInSchema } from 'schemas'
import { Form, Formik } from 'formik'
import {
  ForgetPassword,
  SubmitButton,
  InputField,
  RememberMe,
} from 'components'

const LogInForm = () => {
  const { formInitialValues, submitHandler } = useLogInForm()

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={logInSchema}
      onSubmit={submitHandler}
    >
      {() => {
        return (
          <Form className='space-y-6'>
            <InputField name='username' type='text' />
            <InputField name='password' type='password' />

            <div className='flex items-center justify-between'>
              <RememberMe />
              <ForgetPassword />
            </div>

            <SubmitButton title='log-in' />
          </Form>
        )
      }}
    </Formik>
  )
}

export default LogInForm
