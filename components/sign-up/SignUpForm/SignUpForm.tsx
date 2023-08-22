import { SubmitButton, SuccessModal, TextInputField } from 'components'
import { useSignUpForm } from './useSignUpForm'
import { FormProvider } from 'react-hook-form'

const SignUpForm = () => {
  const {
    setSignUpSuccess,
    userRegistering,
    signUpSuccess,
    submitHandler,
    handleSubmit,
    form,
    t,
  } = useSignUpForm()

  return (
    <>
      <SuccessModal
        description={t('auth:confirmation-instructions')}
        linkActionText={t('auth:go-to-gmail')}
        title={t('auth:confirmation-sent')}
        setSuccess={setSignUpSuccess}
        show={signUpSuccess}
        linkAction={true}
      />

      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className='flex flex-col gap-1'
        >
          <TextInputField name='username' />
          <TextInputField name='email' />
          <TextInputField name='password' type='password' />
          <TextInputField name='confirmPassword' type='password' />

          <SubmitButton
            disabled={userRegistering}
            title='sign-up'
            styles='mt-4'
          />
        </form>
      </FormProvider>
    </>
  )
}

export default SignUpForm
