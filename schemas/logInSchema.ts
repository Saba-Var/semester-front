import * as Yup from 'yup'

export const logInSchema = Yup.object({
  username: Yup.string().trim().required('username-required'),

  password: Yup.string().required('password-required'),
})
