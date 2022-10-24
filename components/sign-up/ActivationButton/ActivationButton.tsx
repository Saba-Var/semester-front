import { ActivationButtonProps } from './types.d'
import { useTranslate } from 'hooks'
import Link from 'next/link'

const ActivationButton: React.FC<ActivationButtonProps> = (props) => {
  const { accountNotFound, activationFail, activationSuccess } = props

  const page = accountNotFound
    ? 'sign-up'
    : activationSuccess
    ? 'log-in'
    : activationFail
    ? 'home'
    : 'log-in'

  return (
    <button className='mt-5'>
      <Link href={`/${page === 'home' ? '' : page}`}>
        <a className='ml-6 text-sm inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-3 py-[10px] lg:py-2 lg:px-4 lg:text-base font-medium text-white shadow-sm hover:bg-blue-700'>
          {useTranslate(`auth:${page}`)}
        </a>
      </Link>
    </button>
  )
}

export default ActivationButton
