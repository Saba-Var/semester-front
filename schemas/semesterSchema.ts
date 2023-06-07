import * as Yup from 'yup'

export const semesterSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required('semester_name_required')
    .max(40, 'semester_name_max'),
})
