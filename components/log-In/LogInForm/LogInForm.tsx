import { FormProvider } from 'react-hook-form'
import { useLogInForm } from './useLogInForm'
import { useTranslate } from 'hooks'
import {
  CheckboxInputField,
  ForgetPassword,
  SubmitButton,
  TextInputField,
} from 'components'

const LogInForm = () => {
  const { submitHandler, handleSubmit, authorizing, form } = useLogInForm()

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className='flex flex-col gap-2'>
          <TextInputField name='email' />
          <TextInputField name='password' type='password' />
        </div>

        <div className='flex mb-4 mt-4 items-center justify-between'>
          <CheckboxInputField
            text={useTranslate('auth:remember-me')}
            name='rememberMe'
          />
          <ForgetPassword />
        </div>

        <SubmitButton disabled={authorizing} title='log-in' />
      </form>
    </FormProvider>
  )
}

export default LogInForm
