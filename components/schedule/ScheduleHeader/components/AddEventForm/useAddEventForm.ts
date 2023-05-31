import { useState } from 'react'

const useAddEventForm = () => {
  const [openEventForm, setOpenEventForm] = useState(false)

  return {
    openEventForm,
    setOpenEventForm,
  }
}

export default useAddEventForm
