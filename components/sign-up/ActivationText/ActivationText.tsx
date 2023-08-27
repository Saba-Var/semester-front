import { ActivationTextProps } from './types.d'
import { useTranslate } from 'hooks'

const ActivationText: React.FC<ActivationTextProps> = (props) => {
  const { activationSuccess, alreadyActivated, accountNotFound } = props

  return (
    <h2 className='text-xl sm:text-3xl px-2 text-center'>
      {useTranslate(
        `auth:account-${
          activationSuccess
            ? 'activated'
            : alreadyActivated
            ? 'already-activated'
            : accountNotFound
            ? 'not-found'
            : 'activation-failed'
        }`
      )}
    </h2>
  )
}

export default ActivationText
