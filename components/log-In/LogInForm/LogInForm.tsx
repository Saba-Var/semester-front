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
          <Form>
            <InputField name='username' type='text' />
            <InputField name='password' type='password' />

            <div className='flex mb-4 mt-4 items-center justify-between'>
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
