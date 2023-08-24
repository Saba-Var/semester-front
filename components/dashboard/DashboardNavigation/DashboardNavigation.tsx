import useDashboardNavigation from './useDashboardNavigation'
import { Button } from 'components'
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
              <div className='relative h-80 bg-blue-500 w-full mx-auto'>
                <Image
                  alt={navItem.name[language as 'ka' | 'en']}
                  className='object-contain select-none group-hover:scale-110 transition-all'
                  src={navItem.image}
                  draggable={false}
                  layout='fill'
                  priority
                />
              </div>

              <div className='p-5'>
                <h4 className='text-gray-800 font-bold text-2xl text-center mb-3 mt-2'>
                  {navItem.name[language as 'ka' | 'en']}
                </h4>

                <p className='mb-4 min-h-[4rem] font-normal text-gray-600'>
                  {t(navItem.descriptionTranslationKey)}
                </p>

                <Link href={navItem.href}>
                  <Button
                    title={t('check_out')}
                    stylesType='soft-btn'
                    className='text-base'
                    fullWidth
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
