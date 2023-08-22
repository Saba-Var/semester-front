import { passwordComplexityRegex } from 'CONSTANTS'
import * as Yup from 'yup'

export const profileFormSchema = Yup.object({
  username: Yup.string()
    .trim()
    .required('username-required')
    .min(3, 'username-min')
    .max(30, 'username-max'),

  oldPassword: Yup.string().required('old_password_required'),

  newPassword: Yup.string()
    .required('new_password_required')
    .min(6, 'password-min')
    .test('password-complexity', 'password_complexity', (value) => {
      return passwordComplexityRegex.test(value!)
    }),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'password-match')
    .required('confirmPassword-required'),
})
