import useCheckboxInputField from './useCheckboxInputField'
import { CheckboxInputFieldProps } from './types'

const CheckboxInputField: React.FC<CheckboxInputFieldProps> = (props) => {
  const { register } = useCheckboxInputField()

  return (
    <label className='text-sm lg:text-base text-gray-900 flex gap-2 items-center cursor-pointer'>
      <input
        {...register(props.name)}
        className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-transparent'
        name='remember-me'
        type='checkbox'
      />
      <span className='select-none'>{props.text}</span>
    </label>
  )
}

export default CheckboxInputField
