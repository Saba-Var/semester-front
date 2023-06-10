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

const DatepickerInputField: React.FC<DatepickerInputFieldProps> = ({
  displayFormat = 'DD/MM/YYYY',
  showDefaultInputIcon = true,
  numberOfMonths = 1,
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
    t,
  } = useDatepickerInputField(isOutsideRange)

  return (
    <div className='flex flex-col min-h-[107px]'>
      <label className='text-left text-base select-none font-medium text-gray-700'>
        {label || t(name)}
      </label>

      <Controller
        control={control}
        name={name}
        rules={{ required: 'Date is required' }}
        defaultValue={null}
        render={({ field }) => (
          <SingleDatePicker
            id='date-input'
            onDateChange={(date) => handleDateChange(date, field)}
            onFocusChange={({ focused }) => setFocused(focused)}
            date={field.value ? moment(field.value) : null}
            showDefaultInputIcon={showDefaultInputIcon}
            isOutsideRange={isOutsideRangeHandler}
            numberOfMonths={numberOfMonths}
            displayFormat={displayFormat}
            hideKeyboardShortcutsPanel
            focused={!!focused}
          />
        )}
      />

      <ErrorMessage
        render={({ message }) => <InputErrorMessage errorMessage={message} />}
        errors={{}}
        name={name}
      />
    </div>
  )
}

export default DatepickerInputField
