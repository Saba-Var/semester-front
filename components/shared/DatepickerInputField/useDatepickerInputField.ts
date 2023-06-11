import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import moment, { Moment } from 'moment'
import { useRouter } from 'next/router'
import { useState } from 'react'

const useDatepickerInputField = (
  name: string,
  isOutsideRange?: (date: Moment) => boolean
) => {
  const [focused, setFocused] = useState<boolean | null>(null)

  const {
    formState: { errors, touchedFields },
    control,
  } = useFormContext()

  const { locale } = useRouter()
  const { t } = useTranslation()

  const isValid = touchedFields[name] && !errors[name]?.message

  const handleDateChange = (date: Moment | null, field: any) => {
    const formattedDate = date ? date.format('YYYY-MM-DD') : ''
    field.onChange(formattedDate)
    field.onBlur()
  }

  const isOutsideRangeHandler = (date: Moment) => {
    return isOutsideRange
      ? isOutsideRange(date)
      : date.isAfter(moment()) || date.isBefore(moment('2020-01-01'))
  }

  moment.locale(locale)

  return {
    isError: !!errors[name]?.message,
    isOutsideRangeHandler,
    handleDateChange,
    setFocused,
    isValid,
    control,
    focused,
    errors,
    t,
  }
}

export default useDatepickerInputField
