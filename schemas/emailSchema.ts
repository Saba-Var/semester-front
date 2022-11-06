import * as Yup from 'yup'

export const emailSchema = Yup.object({
  email: Yup.string().trim().required('email-required').email('valid-email'),
})
