import * as Yup from 'yup'

export const learningActivitySchema = Yup.object({
  subjectName: Yup.string()
    .trim()
    .required('subject_name_required')
    .min(3, 'subject_name_min')
    .max(100, 'subject_name_max'),

  teacherName: Yup.string()
    .trim()
    .required('teacher_name_required')
    .min(3, 'teacher_name_min')
    .max(30, 'teacher_name_max'),

  weekday: Yup.string().required('weekday-required'),

  activityType: Yup.string().required('activity-type-required'),

  startingTime: Yup.string().required('starting-time-required'),

  ending_time: Yup.string().when('starting_time', {
    is: (val: string) => !!val,
    then: Yup.string().required('ending-time-required'),
  }),
})
