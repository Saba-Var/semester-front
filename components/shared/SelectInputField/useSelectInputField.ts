import { useFormContext } from 'react-hook-form'

const useSelectInputField = (name: string) => {
  const {
    formState: { errors, touchedFields },
    register,
  } = useFormContext()

  const isValid = touchedFields[name] && !errors[name]?.message

  return {
    isError: !!errors[name]?.message,
    register,
    isValid,
    errors,
  }
}

export default useSelectInputField
