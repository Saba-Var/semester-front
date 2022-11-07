import { InputField, SubmitButton } from 'components'
import { emailSchema } from 'schemas'
import { Form, Formik } from 'formik'
import { useTranslate } from 'hooks'

const NewPasswordForm = () => {
  return (
    <div>
      <p className='mb-10 text-gray-800 text-base lg:text-lg text-center'>
        {useTranslate('reset:new-password-instruction')}
      </p>

      <Formik
        validationSchema={emailSchema}
        initialValues={{}}
        onSubmit={() => {}}
      >
        {() => {
          return (
            <>
              <Form className='flex flex-col gap-1'>
                <InputField name='password' type='password' />
                <InputField name='confirmPassword' type='password' />

                <SubmitButton disabled={false} title='continue' styles='mt-4' />
              </Form>
            </>
          )
        }}
      </Formik>
    </div>
  )
}

export default NewPasswordForm
