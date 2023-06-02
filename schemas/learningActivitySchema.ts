import * as Yup from 'yup'

export const learningActivitySchema = Yup.object({
  subject_name: Yup.string()
    .trim()
    .required('subject_name_required')
    .min(3, 'subject-name-min')
    .max(100, 'subject-name-max'),

  teacher_name: Yup.string()
    .trim()
    .required('teacher_name_required')
    .min(3, 'teacher-name-min')
    .max(30, 'teacher-name-max'),

  weekday: Yup.string().required('weekday-required'),

  activity_type: Yup.string().required('activity-type-required'),

  starting_time: Yup.string().required('starting-time-required'),

  ending_time: Yup.string().when('starting_time', {
    is: (val: string) => !!val,
    then: Yup.string().required('ending-time-required'),
  }),
})
