import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

export const useInputField = (name: string, type: string) => {
  const [inputType, setInputType] = useState(type)

  const { t } = useTranslation()

  const {
    formState: { errors, touchedFields },
    register,
  } = useFormContext()

  const isValid = touchedFields[name] && !errors[name]?.message

  const passwordShowHandler = () => {
    if (inputType === 'password') {
      return setInputType('text')
    }
    setInputType('password')
  }

  return {
    isPasswordField: type === 'password',
    isError: !!errors[name]?.message,
    passwordShowHandler,
    inputType,
    register,
    isValid,
    errors,
    t,
  }
}
