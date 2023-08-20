import { ProfileInputWrapperProps } from './types'
import { useTranslation } from 'next-i18next'

const ProfileInputWrapper: React.FC<ProfileInputWrapperProps> = ({
  children,
  onClick,
}) => {
  const { t } = useTranslation()

  return (
    <div className='flex w-full gap-4 justify-between items-center text-gray-800 hover:text-gray-600 transition-all'>
      {children}

      <button onClick={onClick} type='button'>
        {t('change')}
      </button>
    </div>
  )
}

export default ProfileInputWrapper
