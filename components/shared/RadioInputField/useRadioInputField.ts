import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

const useRadioInputField = (name: string) => {
  const { t } = useTranslation()

  const {
    formState: { errors, dirtyFields },
    register,
  } = useFormContext()

  const isValid = dirtyFields[name] && !errors[name]?.message

  return {
    isError: !!errors[name]?.message,
    register,
    isValid,
    errors,
    t,
  }
}

export default useRadioInputField
