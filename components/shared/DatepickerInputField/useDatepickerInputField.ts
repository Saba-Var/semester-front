import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import moment, { Moment } from 'moment'
import { useRouter } from 'next/router'
import { useState } from 'react'

const useDatepickerInputField = (
  isOutsideRange?: (date: Moment) => boolean
) => {
  const [focused, setFocused] = useState<boolean | null>(null)

  const { control } = useFormContext()
  const { locale } = useRouter()
  const { t } = useTranslation()

  const handleDateChange = (date: Moment | null, field: any) => {
    const formattedDate = date ? date.format('YYYY-MM-DD') : null

    field.onChange(formattedDate)
  }

  const isOutsideRangeHandler = (date: Moment) => {
    return isOutsideRange
      ? isOutsideRange(date)
      : date.isAfter(moment()) || date.isBefore(moment('2020-01-01'))
  }

  moment.locale(locale)

  return {
    isOutsideRangeHandler,
    handleDateChange,
    setFocused,
    control,
    focused,
    t,
  }
}

export default useDatepickerInputField
