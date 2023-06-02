import { useForm, useWatch } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

const useAddEventForm = () => {
  const [openEventForm, setOpenEventForm] = useState(false)

  const { t } = useTranslation()

  const form = useForm({
    mode: 'onTouched',
  })

  const submitHandler = (data) => {
    console.log(data)
  }

  const startingTime = useWatch({
    control: form.control,
    name: 'starting_time',
  })

  const endingTime = useWatch({
    control: form.control,
    name: 'ending_time',
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

  if (startingTime && endingTime && startingTime >= endingTime) {
    form.setValue('ending_time', '')
  }

  return {
    setOpenEventForm,
    generateOptions,
    openEventForm,
    submitHandler,
    startingTime,
    form,
    t,
  }
}

export default useAddEventForm
