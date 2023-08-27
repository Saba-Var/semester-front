import { FormProvider } from 'react-hook-form'
import { useLogInForm } from './useLogInForm'
import { useTranslate } from 'hooks'
import {
  CheckboxInputField,
  ForgetPassword,
  TextInputField,
  Button,
} from 'components'

const LogInForm = () => {
  const { submitHandler, handleSubmit, authorizing, form, t } = useLogInForm()

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

        <Button
          title={t('inputs:log-in')}
          disabled={authorizing}
          showLoadingIndicator
          type='submit'
          fullWidth
        />
      </form>
    </FormProvider>
  )
}

export default LogInForm
