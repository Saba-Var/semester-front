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
      const lowercaseRegex = /[a-z]/
      const uppercaseRegex = /[A-Z]/
      const specialSymbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/

      return (
        lowercaseRegex.test(value!) &&
        uppercaseRegex.test(value!) &&
        specialSymbolRegex.test(value!)
      )
    }),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'password-match')
    .required('confirmPassword-required'),
})
