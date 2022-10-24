import { SubmitButtonProps } from './types.d'
import { useTranslate } from 'hooks'

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  const { title, styles, disabled } = props

  return (
    <button
      className={`flex w-full select-none justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${styles} ${
        disabled &&
        'bg-gray-500 cursor-not-allowed focus:ring-gray-400 hover:bg-gray-400'
      }`}
      disabled={disabled ? disabled : false}
      type='submit'
    >
      {useTranslate(`inputs:${title}`)}
    </button>
  )
}

export default SubmitButton
