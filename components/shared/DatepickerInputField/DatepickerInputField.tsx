import useDatepickerInputField from './useDatepickerInputField'
import { ErrorMessage } from '@hookform/error-message'
import { DatepickerInputFieldProps } from './types'
import { InputErrorMessage } from 'components'
import { SingleDatePicker } from 'react-dates'
import { Controller } from 'react-hook-form'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'
import moment from 'moment'
import 'moment/locale/ka'
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid'

const DatepickerInputField: React.FC<DatepickerInputFieldProps> = ({
  displayFormat = 'DD/MM/YYYY',
  numberOfMonths = 1,
  placeholder = '',
  disabled = false,
  required = true,
  isOutsideRange,
  label = '',
  name,
}) => {
  const {
    isOutsideRangeHandler,
    handleDateChange,
    setFocused,
    control,
    focused,
    isValid,
    isError,
    errors,
    t,
  } = useDatepickerInputField(name, isOutsideRange)

  return (
    <div
      className={`flex p-0 relative flex-col min-h-[107px] ${
        isError ? 'date-picker-error' : ''
      } ${isValid ? 'date-picker-valid' : ''}`}
    >
      <label
        className={`text-left mb-2 text-base select-none font-medium text-gray-700 ${
          isError && 'text-red-900'
        }`}
      >
        {label || t(name)} {required ? '*' : ''}
      </label>

      <Controller
        rules={{ required: 'Date is required' }}
        defaultValue={null}
        control={control}
        name={name}
        render={({ field }) => (
          <SingleDatePicker
            placeholder={placeholder ? placeholder : t('date_placeholder')}
            onDateChange={(date) => handleDateChange(date, field)}
            onFocusChange={({ focused }) => setFocused(focused)}
            date={field.value ? moment(field.value) : null}
            isOutsideRange={isOutsideRangeHandler}
            numberOfMonths={numberOfMonths}
            displayFormat={displayFormat}
            showDefaultInputIcon={false}
            hideKeyboardShortcutsPanel
            id={`datepicker-${name}`}
            focused={!!focused}
            disabled={disabled}
          />
        )}
      />

      {isValid && (
        <CheckCircleIcon
          className={`h-5 w-5 text-emerald-500 absolute right-3 bottom-[9px] top-[52%] -translate-y-1/2`}
        />
      )}

      {isError && (
        <div
          className={`pointer-events-none absolute inset-y-0 top-1 right-0 flex items-center pr-3`}
        >
          <ExclamationCircleIcon
            className={`h-5 w-5 text-red-500`}
            aria-hidden='true'
          />
        </div>
      )}

      <ErrorMessage
        render={() => <InputErrorMessage errorMessage={errors[name]} />}
        errors={errors}
        name={name}
      />
    </div>
  )
}

export default DatepickerInputField
