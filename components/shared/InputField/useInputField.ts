import { useField } from 'formik'
import { useState } from 'react'

export const useInputField = (data: { name: string; type: string }) => {
  const [field, meta] = useField(data)

  const [inputType, setInputType] = useState(data.type)

  const isValid = meta.touched && !meta.error
  const isError = meta.error && meta.touched

  const isPasswordField = field.name.toLocaleLowerCase().includes('password')

  const passwordShowHandler = () => {
    if (inputType === 'password') {
      return setInputType('text')
    }
    setInputType('password')
  }

  return {
    passwordShowHandler,
    isPasswordField,
    inputType,
    isError,
    isValid,
    field,
  }
}
