import { ToastContainer as ToastifyContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ToastContainer = () => {
  return (
    <ToastifyContainer
      hideProgressBar={false}
      pauseOnHover={false}
      position='top-right'
      autoClose={3500}
      pauseOnFocusLoss
      closeOnClick
      theme='light'
      newestOnTop
      rtl={false}
      draggable
    />
  )
}
