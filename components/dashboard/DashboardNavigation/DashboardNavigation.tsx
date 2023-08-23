import { useTranslation } from 'next-i18next'
import { CustomButton } from 'components'
import { navigation } from 'CONSTANTS'
import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'

const DashboardNavigation = () => {
  const { t } = useTranslation('dashboard')
  const { language } = Cookies.get()

  return (
    <div className='flex gap-20 w-full justify-center mt-32 flex-wrap'>
      {navigation.map((navItem) =>
        navItem.image ? (
          <Link key={navItem.name.en} href={navItem.href}>
            <div className='w-1/4 bg-white border group border-gray-200 overflow-hidden rounded-lg shadow hover:shadow-lg transition-all cursor-pointer'>
              <div className='bg-blue-600 overflow-hidden relative h-60 w-full'>
                <Image
                  alt={navItem.name[language as 'ka' | 'en']}
                  className='object-cover group-hover:scale-110 transition-all'
                  src={navItem.image}
                  layout='fill'
                  priority
                />
              </div>

              <div className='p-5'>
                <h4 className='text-gray-800 font-bold text-2xl text-center mb-3 mt-2'>
                  {navItem.name[language as 'ka' | 'en']}
                </h4>

                <p className='mb-4 h-32 font-normal text-gray-600'>
                  {t(navItem.descriptionTranslationKey)}
                </p>

                <CustomButton
                  stylesType='soft-btn'
                  styles='text-base'
                  title={t('check_out')}
                />
              </div>
            </div>
          </Link>
        ) : null
      )}
    </div>
  )
}

export default DashboardNavigation
