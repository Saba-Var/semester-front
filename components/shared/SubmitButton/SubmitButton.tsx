import { SubmitButtonProps } from './types.d'
import { useTranslate } from 'hooks'

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  const { title, styles } = props

  return (
    <button
      className={`flex w-full select-none justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${styles}`}
      type='submit'
    >
      {useTranslate(`inputs:${title}`)}
    </button>
  )
}

export default SubmitButton
