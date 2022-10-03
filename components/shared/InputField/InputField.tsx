import { EyeIcon, ValidIcon, InputErrorMessage } from 'components'
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { useInputField } from './useInputField'
import { InputFieldProps } from './types.d'
import { ErrorMessage } from 'formik'
import { useTranslate } from 'hooks'

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
    <div className='h-[86px]'>
      <label
        className={`block text-sm font-medium text-gray-700 ${
          isError && 'text-red-900'
        }`}
      >
        {useTranslate(`inputs:${name}`)}
      </label>
      <div className='mt-1 relative'>
        <input
          {...field}
          {...props}
          className={`block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
            isError &&
            'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
          } ${isValid && '!border-green'}`}
          placeholder={useTranslate(`inputs:${name}`)}
          type={inputType}
        />

        {isError && (
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
            <ExclamationCircleIcon
              className={`h-5 w-5 text-red-500 ${
                isPasswordField && 'absolute right-8 1xl:!right-[32px]'
              }`}
              aria-hidden='true'
            />
          </div>
        )}

        {isValid && (
          <ValidIcon
            styles={`absolute ${
              isPasswordField && 'right-7'
            } right-3 bottom-[9px] ${
              isPasswordField && '!right-8 1xl:!right-[32px]'
            } top-[50%] -translate-y-1/2`}
          />
        )}

        {isPasswordField && (
          <div onClick={passwordShowHandler}>
            <EyeIcon />
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
