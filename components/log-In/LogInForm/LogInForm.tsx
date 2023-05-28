import { FormProvider } from 'react-hook-form'
import { useLogInForm } from './useLogInForm'
import {
  ForgetPassword,
  SubmitButton,
  InputField,
  RememberMe,
} from 'components'

const LogInForm = () => {
  const {
    setRememberCheckbox,
    submitHandler,
    handleSubmit,
    authorizing,
    form,
  } = useLogInForm()

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className='flex flex-col gap-2'>
          <InputField name='email' type='text' />
          <InputField name='password' type='password' />
        </div>

        <div className='flex mb-4 mt-4 items-center justify-between'>
          <RememberMe setRememberCheckbox={setRememberCheckbox} />
          <ForgetPassword />
        </div>

        <SubmitButton disabled={authorizing} title='log-in' />
      </form>
    </FormProvider>
  )
}

export default LogInForm
