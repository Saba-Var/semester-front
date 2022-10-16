import * as Yup from 'yup'

export const logInSchema = Yup.object({
  email: Yup.string().trim().required('email-required').email('valid-email'),

  password: Yup.string().required('password-required'),
})
