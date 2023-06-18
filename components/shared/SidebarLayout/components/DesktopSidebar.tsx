import useDesktopSidebar from './useDesktopSidebar'
import type { DesktopSidebarProps } from './types'
import { navigation } from 'CONSTANTS'
import Link from 'next/link'
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
          className={`bg-blue-500 group border-white ease-anm border top-1/2 -translate-y-1/2 shadow-sm cursor-pointer translate-x-1/2 right-0 w-5 h-5 absolute rounded-full flex justify-center items-center ${
            isDesktopSideBarOpen ? '-translate-x-5' : ''
          }`}
        >
          <ChevronRightIcon
            onClick={handleSidebarOpen}
            className={`text-white w-5 h-5 ease-anm ${
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
        <nav className={`flex flex-col gap-2 items-center`}>
          {navigation.map((item) => (
            <Link key={item.name.en} href={item.href}>
              <a
                className={`flex relative ease-anm overflow-hidden justify-center group items-center bg-blue-600 hover:bg-indigo-500 rounded-full hover:rounded-2xl w-14 h-14 ${
                  (pathname.includes(item.href) && item.href !== '/') ||
                  (pathname === '/' && item.name.en === 'Dashboard')
                    ? 'bg-indigo-500'
                    : ''
                } !justify-start gap-5 ${
                  isDesktopSideBarOpen
                    ? '!w-full text-white !bg-transparent'
                    : 'pl-4'
                }`}
              >
                <div className='!h-6 !w-6'>
                  <item.icon
                    className='!h-6 !w-6 text-slate-300 group-hover:text-white'
                    aria-hidden='true'
                  />
                </div>

                <p>{item.name[lang]}</p>

                {!isDesktopSideBarOpen && (
                  <div className='animate-fade-in hidden group-hover:block'>
                    <span className='absolute top-1/2 -translate-y-[46%] left-20 bg-blue-600 text-white px-2 py-1 rounded-lg'>
                      {t(item.name[lang])}
                    </span>
                    <span className='absolute top-1/2 -translate-y-1/2 bg-transparent text-blue-600 left-[4.3rem]'>
                      &#9668;
                    </span>
                  </div>
                )}
              </a>
            </Link>
          ))}
        </nav>

        {isDesktopSideBarOpen && (
          <div
            className='flex relative justify-center animate-fade-in group items-center bg-blue-600 hover:bg-indigo-700 rounded-full hover:rounded-2xl w-14 h-14'
            onClick={() => logoutMutation()}
          >
            <div className='animate-fade-in hidden group-hover:block'>
              <span className='absolute top-1/2 -translate-y-[46%] left-20 bg-blue-600 text-white px-2 py-1 rounded-lg'>
                {t('logout')}
              </span>
              <span className='absolute top-1/2 -translate-y-1/2 bg-transparent text-blue-600 left-[4.3rem]'>
                &#9668;
              </span>
            </div>
            <ArrowLeftOnRectangleIcon className='h-6 w-6 text-slate-300 group-hover:text-white' />
          </div>
        )}
      </div>
    </div>
  )
}

export default DesktopSidebar
