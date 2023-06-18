import { toast } from 'react-toastify'

export const emitToast = (message: string) => {
  return toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  })
}
