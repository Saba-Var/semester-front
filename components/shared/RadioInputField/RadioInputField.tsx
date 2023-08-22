import { ErrorMessage } from '@hookform/error-message'
import useRadioInputField from './useRadioInputField'
import { RadioInputFieldProps } from './types'
import { InputErrorMessage } from 'components'
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid'

const RadioInputField: React.FC<RadioInputFieldProps> = ({
  disabled = false,
  required = true,
  dataList,
  title,
  name,
}) => {
  const { register, t, isError, errors, isValid } = useRadioInputField(name)

  return (
    <div className='min-h-[5.5rem]'>
      <label className='text-base relative gap-1 flex items-center select-none font-medium text-gray-700'>
        <span className={`${isError && 'text-red-900'}`}>{`${title}${
          required ? ' *' : ''
        }`}</span>

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

      <fieldset className='mt-4'>
        <div className='flex flex-wrap items-center gap-4'>
          {dataList.map((item) => (
            <div key={item.value}>
              <label
                htmlFor={item.value}
                className={`ml-3 text-sm gap-2 font-medium flex items-center leading-6 text-gray-900 ${
                  disabled ? 'cursor-not-allowed' : ''
                }`}
              >
                <input
                  className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 disabled:text-gray-500 disabled:cursor-not-allowed'
                  {...register(name)}
                  disabled={disabled}
                  value={item.value}
                  id={item.value}
                  type='radio'
                />
                <p className={disabled ? 'text-gray-500' : ''}>
                  {t(item.title)}
                </p>
              </label>
            </div>
          ))}
        </div>

        <ErrorMessage
          render={() => <InputErrorMessage errorMessage={errors[name]} />}
          errors={errors}
          name={name}
        />
      </fieldset>
    </div>
  )
}

export default RadioInputField
