import { ToastContainer as ToastifyContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ToastContainer = () => {
  return (
    <ToastifyContainer
      hideProgressBar={false}
      position='top-right'
      autoClose={3500}
      pauseOnFocusLoss
      closeOnClick
      theme='light'
      pauseOnHover
      newestOnTop
      rtl={false}
      draggable
    />
  )
}
