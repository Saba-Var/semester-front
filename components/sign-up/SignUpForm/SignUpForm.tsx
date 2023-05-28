import { SubmitButton, SuccessModal, InputField } from 'components'
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

      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className='flex flex-col gap-1'
        >
          <InputField name='username' type='text' />
          <InputField name='email' type='text' />
          <InputField name='password' type='password' />
          <InputField name='confirmPassword' type='password' />

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
