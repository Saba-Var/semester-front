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
  const { formInitialValues, submitHandler, fetchError } = useLogInForm()

  return (
    <Formik
      validateOnChange={fetchError ? false : true}
      validateOnBlur={fetchError ? false : true}
      initialValues={formInitialValues}
      validationSchema={logInSchema}
      onSubmit={submitHandler}
    >
      {() => {
        return (
          <Form>
            <div className='flex flex-col gap-2'>
              <InputField name='email' type='text' />
              <InputField name='password' type='password' />
            </div>

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
