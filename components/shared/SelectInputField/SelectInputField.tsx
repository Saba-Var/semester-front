import useSelectInputField from './useSelectInputField'
import { ErrorMessage } from '@hookform/error-message'
import { SelectInputFieldProps } from './types'
import { InputErrorMessage } from 'components'
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid'

const SelectInputField: React.FC<SelectInputFieldProps> = ({
  disabled = false,
  required = true,
  optionsList,
  title,
  name,
}) => {
  const { register, t, errors, isValid, isError } = useSelectInputField(name)

  return (
    <div className='min-h-[5.9rem]'>
      <label
        className={`flex items-center gap-1 relative text-sm text-left font-medium leading-6 text-gray-900 ${
          isError && 'text-red-900'
        }`}
        htmlFor='location'
      >
        <span>{`${title} ${required ? '*' : ''}`}</span>

        <div className='w-5 h-5'>
          {isValid && (
            <CheckCircleIcon className={`h-5 w-5 text-emerald-500`} />
          )}

          {isError && (
            <ExclamationCircleIcon
              className={`h-5 w-5 text-red-500`}
              aria-hidden='true'
            />
          )}
        </div>
      </label>

      <select
        disabled={disabled}
        className={`mt-2 block w-full disabled:text-gray-500 disabled:cursor-not-allowed disabled:ring-gray-200 disabled:bg-gray-100 rounded-md border-1 border-transparent py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
          isError ? 'ring-red-300' : ''
        } ${isValid ? 'ring-green' : ''}`}
        {...register(name)}
      >
        <option value=''>{`${t('select')}`}</option>
        {optionsList.map((option) => {
          return <option key={option.id}>{option.title}</option>
        })}
      </select>

      <ErrorMessage
        render={() => <InputErrorMessage errorMessage={errors[name]} />}
        errors={errors}
        name={name}
      />
    </div>
  )
}

export default SelectInputField
