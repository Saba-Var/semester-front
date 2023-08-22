import { SubmitButtonProps } from './types.d'
import { LoadingIcon } from 'components'
import { useTranslate } from 'hooks'

const SubmitButton: React.FC<SubmitButtonProps> = ({
  showLoadingIndicator = true,
  disabled = false,
  styles,
  title,
}) => {
  return (
    <button
      className={`flex w-full select-none justify-center rounded-md border border-transparent bg-blue-600 py-3 px-4 text-sm lg:text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${styles} ${
        disabled &&
        'bg-gray-400 gap-1 cursor-not-allowed items-center justify-center hover:bg-gray-400 focus:ring-gray-400'
      }`}
      disabled={disabled}
      type='submit'
    >
      <p>{useTranslate(`inputs:${title}`)}</p>

      {disabled && showLoadingIndicator && (
        <span className='w-5 h-5'>
          <LoadingIcon styles='h-5 w-5' />
        </span>
      )}
    </button>
  )
}

export default SubmitButton
