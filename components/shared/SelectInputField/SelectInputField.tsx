import useSelectInputField from './useSelectInputField'
import { SelectInputFieldProps } from './types'

const SelectInputField: React.FC<SelectInputFieldProps> = ({
  required = true,
  optionsList,
  title,
  name,
}) => {
  const { register } = useSelectInputField(name)

  return (
    <div>
      <label
        htmlFor='location'
        className='block text-sm text-left font-medium leading-6 text-gray-900'
      >
        {`${title} ${required ? '*' : ''}`}
      </label>
      <select
        className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
        {...register(name)}
        id='location'
      >
        <option value=''></option>
        {optionsList.map((option) => {
          return <option key={option.id}>{option.title}</option>
        })}
      </select>
    </div>
  )
}

export default SelectInputField
