import { useFormContext } from 'react-hook-form'

const useCheckboxInputField = () => {
  const { register } = useFormContext()

  return { register }
}

export default useCheckboxInputField
