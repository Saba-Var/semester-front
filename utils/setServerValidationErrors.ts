import { UseFormReturn } from 'react-hook-form'

export const setServerValidationErrors = (
  error: any,
  form: UseFormReturn<any>
) => {
  const status = error?.response?.status

  const errors: {} = error?.response?.data?.errors || {}

  if (status === 422 && Object.keys(errors)?.length > 0) {
    const errorsArray: [string, string[]][] = Object.entries(errors) || []

    errorsArray.forEach(([key, value]) => {
      form.setError(key, {
        message: value[0],
        type: 'server',
      })
    })
  }

  if (status === 409) {
    const conflictErrors = error?.response?.data

    if (!!conflictErrors) {
      for (const key in conflictErrors) {
        form.setError(key, {
          message: conflictErrors[key],
          type: 'server',
        })
      }
    }
  }
}
