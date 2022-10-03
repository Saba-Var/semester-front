import * as Yup from 'yup'

export const registrationFormSchema = Yup.object({
  username: Yup.string()
    .trim()
    .required('username-required')
    .min(3, 'username-min')
    .max(15, 'username-max'),

  email: Yup.string().trim().required('email-required').email('valid-email'),

  password: Yup.string().required('password-required').min(6, 'password-min'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'password-match')
    .required('confirmPassword-required'),
})
