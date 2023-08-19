import { UseFormReturn } from 'react-hook-form'

export const setValidationErrors = (error: any, form: UseFormReturn<any>) => {
  const status = error?.response?.status

  const errors: {} = error?.response?.data?.errors || {}

  if (status === 422 && Object.keys(errors)?.length > 0) {
    const errorsArray: [string, string[]][] = Object.entries(errors) || []

    errorsArray.forEach(([key, value]) => {
      console.log(value?.[0])
      form.setError(key, {
        type: '422',
        message: value[0],
      })
    })
  }
}
