import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import type { RootState } from 'store'

const useProfileForm = () => {
  const user = useSelector((state: RootState) => state.user)

  const form = useForm({
    defaultValues: {
      username: user.username,
      email: user.email,
    },
    mode: 'onSubmit',
  })

  const {
    handleSubmit,
    formState: { isDirty },
  } = form

  const submitHandler = () => {}

  return { form, submitHandler, handleSubmit, isDirty }
}

export default useProfileForm
