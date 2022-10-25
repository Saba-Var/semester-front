import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { InputErrorMessage } from 'components'
import { useInputField } from './useInputField'
import { InputFieldProps } from './types.d'
import { ErrorMessage } from 'formik'
import { useTranslate } from 'hooks'
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid'

const InputField: React.FC<InputFieldProps> = (props) => {
  const { name } = props

  const {
    passwordShowHandler,
    isPasswordField,
    inputType,
    isError,
    isValid,
    field,
  } = useInputField(props)

  return (
    <div className='min-h-[90px]'>
      <label
        className={`block text-sm select-none font-medium text-gray-700 ${
          isError && 'text-red-900'
        }`}
      >
        {useTranslate(`inputs:${name}`)}
      </label>
      <div className='mt-1 relative'>
        <input
          {...field}
          {...props}
          className={`block w-full pr-8 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm ${
            isError &&
            'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
          } ${isValid && '!border-green'} ${
            isPasswordField && (isError || isValid) && 'pr-14'
          }`}
          placeholder={useTranslate(`inputs:${name}`)}
          type={inputType}
        />

        {isValid && (
          <CheckCircleIcon
            className={`h-5 w-5 text-emerald-500 absolute right-3 bottom-[9px] top-[50%] -translate-y-1/2 ${
              isPasswordField && 'right-8'
            }`}
          />
        )}

        {isError && (
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 ${
              isPasswordField && 'right-1'
            }`}
          >
            <ExclamationCircleIcon
              className={`h-5 w-5 text-red-500 ${
                isPasswordField && 'absolute right-7'
              }`}
              aria-hidden='true'
            />
          </div>
        )}

        {isPasswordField && (
          <div
            className='absolute text-gray-600 hover:scale-110 w-[18px] h-[18px] active:scale-95 transition-transform right-3 top-[50%] -translate-y-1/2 cursor-pointer'
            onClick={passwordShowHandler}
          >
            {inputType === 'text' ? <EyeIcon /> : <EyeSlashIcon />}
          </div>
        )}
      </div>

      <ErrorMessage name={field.name}>
        {(errorMessage) => {
          return <InputErrorMessage errorMessage={errorMessage} />
        }}
      </ErrorMessage>
    </div>
  )
}

export default InputField
