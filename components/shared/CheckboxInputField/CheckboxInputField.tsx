import useCheckboxInputField from './useCheckboxInputField'
import { CheckboxInputFieldProps } from './types'

const CheckboxInputField: React.FC<CheckboxInputFieldProps> = ({
  disabled = false,
  name,
  text,
  ...props
}) => {
  const { register } = useCheckboxInputField()

  return (
    <label
      className={`text-sm lg:text-base text-gray-900 flex gap-2 items-center cursor-pointer ${
        disabled && '!cursor-not-allowed'
      }`}
    >
      <input
        disabled={disabled}
        {...register(name)}
        className={`h-4 w-4 rounded border-gray-300 focus:ring-blue-600 ${
          disabled && 'cursor-not-allowed accent-inherit !bg-gray-400'
        }`}
        name='rememberMe'
        type='checkbox'
        {...props}
      />
      <span className='select-none'>{text}</span>
    </label>
  )
}

export default CheckboxInputField
