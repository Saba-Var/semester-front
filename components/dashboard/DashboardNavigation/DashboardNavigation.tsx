import useDashboardNavigation from './useDashboardNavigation'
import { CustomButton } from 'components'
import { navigation } from 'CONSTANTS'
import Image from 'next/image'
import Link from 'next/link'

const DashboardNavigation = () => {
  const { t, language } = useDashboardNavigation()

  return (
    <div className='2.5xl:px-44 xl:px-20'>
      <hr />

      <div className='xl:gap-20 gap-8 w-full mt-10 md:grid-cols-2 grid grid-cols-1 justify-center flex-wrap'>
        {navigation.map((navItem) =>
          navItem.image ? (
            <div
              className='bg-white border group border-gray-200 overflow-hidden rounded-lg shadow hover:shadow-lg transition-all cursor-default'
              key={navItem.name.en}
            >
              <div className='bg-blue-600 py-4 h-80 overflow-hidden'>
                <div className='relative h-full w-[75%] mx-auto group-hover:scale-110 transition-all'>
                  <Image
                    alt={navItem.name[language as 'ka' | 'en']}
                    className='object-contain select-none'
                    src={navItem.image}
                    draggable={false}
                    layout='fill'
                    priority
                  />
                </div>
              </div>

              <div className='p-5'>
                <h4 className='text-gray-800 font-bold text-2xl text-center mb-3 mt-2'>
                  {navItem.name[language as 'ka' | 'en']}
                </h4>

                <p className='mb-4 min-h-[4rem] font-normal text-gray-600'>
                  {t(navItem.descriptionTranslationKey)}
                </p>

                <Link href={navItem.href}>
                  <CustomButton
                    stylesType='soft-btn'
                    styles='text-base'
                    title={t('check_out')}
                  />
                </Link>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}

export default DashboardNavigation
