import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

const useRadioInputField = (name: string) => {
  const { t } = useTranslation()

  const {
    formState: { errors, touchedFields },
    register,
  } = useFormContext()

  const isValid = touchedFields[name] && !errors[name]?.message

  return {
    isError: !!errors[name]?.message,
    register,
    errors,
    isValid,
    t,
  }
}

export default useRadioInputField
