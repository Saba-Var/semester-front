import useDesktopSidebar from './useDesktopSidebar'
import type { DesktopSidebarProps } from './types'
import { navigation } from 'CONSTANTS'
import { NavItem } from 'components'
import {
  ArrowLeftOnRectangleIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ logoutMutation }) => {
  const { pathname, t, lang, isDesktopSideBarOpen, handleSidebarOpen } =
    useDesktopSidebar()

  return (
    <div
      className={`hidden z-50 md:fixed ease-anm md:inset-y-0 md:flex md:flex-col bg-blue-700 ${
        isDesktopSideBarOpen ? 'w-60' : 'w-20'
      }`}
    >
      <div className='relative'>
        <p className='w-full text-white cursor-pointer text-4xl border-b-gray-700 border-b flex justify-center items-center h-16'>
          S
        </p>

        <div
          className={`bg-blue-600 group border-white ease-anm border top-1/2 -translate-y-1/2 shadow-sm cursor-pointer translate-x-1/2 right-0 w-5 h-5 absolute rounded-full flex justify-center items-center ${
            isDesktopSideBarOpen ? '-translate-x-5' : ''
          }`}
        >
          <ChevronRightIcon
            onClick={handleSidebarOpen}
            className={`text-white w-4 h-4 ease-anm ${
              isDesktopSideBarOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />

          <div className='animate-fade-in hidden group-hover:block'>
            <span className='absolute top-1/2 -translate-y-[46%] left-10 bg-blue-600 text-white px-2 py-1 rounded-lg'>
              {isDesktopSideBarOpen ? t('collapse') : t('expand')}
            </span>
            <span className='absolute top-1/2 -translate-y-1/2 bg-transparent text-blue-600 left-[1.7rem]'>
              &#9668;
            </span>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center py-3 flex-grow flex-col'>
        <nav className={`flex flex-col gap-2 ease-anm items-center w-full`}>
          {navigation.map((item) => {
            const isCurrentRoute =
              (pathname.includes(item.href) && item.href !== '/') ||
              (pathname === '/' && item.name.en === 'Dashboard')

            return (
              <NavItem
                isDesktopSideBarOpen={isDesktopSideBarOpen}
                isCurrentRoute={isCurrentRoute}
                name={item.name[lang]}
                key={item.name.en}
                href={item.href}
                Icon={item.icon}
              />
            )
          })}
        </nav>

        <NavItem
          isDesktopSideBarOpen={isDesktopSideBarOpen}
          clickHandler={() => logoutMutation()}
          Icon={ArrowLeftOnRectangleIcon}
          isCurrentRoute={false}
          name={'logout'}
          key={'logout'}
          href={'#'}
        />
      </div>
    </div>
  )
}

export default DesktopSidebar
