import * as Yup from 'yup'

export const resetPasswordSchema = Yup.object({
  password: Yup.string().required('password-required').min(6, 'password-min'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'password-match')
    .required('confirmPassword-required'),
})
