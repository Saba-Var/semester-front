import { InputErrorMessageProps } from './types.d'
import { useTranslation } from 'next-i18next'

const InputErrorMessage: React.FC<InputErrorMessageProps> = ({
  errorMessage,
}) => {
  const { t } = useTranslation('inputs')
  // TODO: move error translations into common file

  return (
    <p className='lg:mt-1 text-left text-sm text-red-600'>
      {typeof errorMessage?.message === 'string' &&
      errorMessage?.type === 'server'
        ? errorMessage?.message
        : t(errorMessage?.message! as string)}
    </p>
  )
}

export default InputErrorMessage
