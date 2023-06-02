import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

const useSelectInputField = (name: string) => {
  const {
    formState: { errors, touchedFields },
    register,
  } = useFormContext()

  const { t } = useTranslation()

  const isValid = touchedFields[name] && !errors[name]?.message

  return {
    isError: !!errors[name]?.message,
    register,
    isValid,
    errors,
    t,
  }
}

export default useSelectInputField
