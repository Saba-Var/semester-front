import { useForm } from 'react-hook-form'
import { useState } from 'react'

const useAddEventForm = () => {
  const [openEventForm, setOpenEventForm] = useState(false)

  const form = useForm({
    mode: 'onTouched',
  })

  const submitHandler = (data) => {
    console.log(data)
  }

  return {
    setOpenEventForm,
    openEventForm,
    submitHandler,
    form,
  }
}

export default useAddEventForm
