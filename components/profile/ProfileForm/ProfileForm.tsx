import { TextInputField, SubmitButton, CustomButton } from 'components'
import { FormProvider } from 'react-hook-form'
import useProfileForm from './useProfileForm'

const ProfileForm = () => {
  const { form, handleSubmit, submitHandler, isDirty } = useProfileForm()

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(submitHandler)} className='mt-8'>
          <TextInputField name='username' />

          <TextInputField name='email' disabled />

          <TextInputField
            placeholder='***************'
            showEyeIcon={false}
            name='password'
            type='password'
            disabled
          />

          <div className='flex gap-4 items-center mt-10'>
            <CustomButton
              stylesType='secondary-btn'
              styles='h-12.5'
              title='sdasd'
            />
            <SubmitButton title='update' disabled={!isDirty} />
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default ProfileForm
