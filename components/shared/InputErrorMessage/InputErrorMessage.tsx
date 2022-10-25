import { InputErrorMessageProps } from './types.d'
import { useTranslate } from 'hooks'

const InputErrorMessage: React.FC<InputErrorMessageProps> = (props) => {
  const { errorMessage } = props

  return (
    <p className='lg:mt-1 text-sm text-red-600'>
      {useTranslate(`inputs:${errorMessage}`)}
    </p>
  )
}

export default InputErrorMessage
