import { UseFormReturn, useWatch } from 'react-hook-form'
import { LearningActivityFormData } from 'types'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'

const useLearningActivityForm = (
  form: UseFormReturn<LearningActivityFormData>
) => {
  const { t } = useTranslation('')

  const startingTime = useWatch({
    control: form.control,
    name: 'startingTime',
  })

  const endingTime = useWatch({
    control: form.control,
    name: 'endingTime',
  })

  const generateFormattedTime = (hour: number, minute: string) => {
    return hour.toString().padStart(2, '0') + ':' + minute
  }

  const generateOptions = (minHour: number, isEndingTime?: boolean) => {
    const options = []

    for (let i = minHour; i <= 22; i++) {
      const withZeroMinutes = generateFormattedTime(i, '00')
      const withThirtyMinutes = generateFormattedTime(i, '30')

      options.push({
        id: withZeroMinutes,
        title: withZeroMinutes,
      })

      options.push({
        id: withThirtyMinutes,
        title: withThirtyMinutes,
      })
    }

    options.push({ id: '23:00', title: '23:00' })

    if (isEndingTime) {
      options.push({ id: '23:30', title: '23:30' })

      return options.filter((option) => {
        if (startingTime) {
          return option.id > startingTime
        }
      })
    }

    return options
  }

  useEffect(() => {
    if (startingTime && endingTime && startingTime >= endingTime) {
      form.setValue('endingTime', '')
      form.setError('endingTime', {
        message: 'invalid_ending_time',
      })
    } else if (startingTime && endingTime && startingTime < endingTime) {
      form.clearErrors('endingTime')
    }
  }, [endingTime, form, startingTime])

  return { t, startingTime, generateOptions }
}

export default useLearningActivityForm
