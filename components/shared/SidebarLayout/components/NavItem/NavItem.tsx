import { useTranslation } from 'next-i18next'
import { NavItemProps } from './types'
import Link from 'next/link'

const NavItem: React.FC<NavItemProps> = ({
  clickHandler = () => {},
  isDesktopSideBarOpen,
  isCurrentRoute,
  href,
  Icon,
  name,
}) => {
  const { t } = useTranslation()

  return (
    <div
      onClick={clickHandler}
      className={`w-full relative group ease-anm pl-3 ${
        isDesktopSideBarOpen ? 'hover:bg-indigo-500 pl-7' : ''
      } ${isCurrentRoute && isDesktopSideBarOpen ? 'bg-indigo-500' : ''}`}
    >
      <Link href={href}>
        <a
          className={`flex relative ease-anm overflow-hidden justify-center group items-center bg-blue-600 hover:bg-indigo-500 rounded-[30px] hover:rounded-2xl w-14 h-14 ${
            isCurrentRoute ? 'bg-indigo-500 !rounded-2xl' : ''
          } !justify-start gap-5 ${
            isDesktopSideBarOpen ? '!w-full text-white !bg-transparent' : 'pl-4'
          }`}
        >
          <div className='!h-6 !w-6'>
            <Icon
              className={`!h-6 !w-6 text-slate-300 group-hover:text-white ${
                isCurrentRoute ? '!text-white' : ''
              }`}
              aria-hidden='true'
            />
          </div>

          <p>{name}</p>
        </a>
      </Link>

      {!isDesktopSideBarOpen && (
        <div className='ease-anm hidden group-hover:block'>
          <span className='absolute top-1/2 -translate-y-[46%] left-[5.5rem] bg-blue-600 text-white px-2 py-1 rounded-lg'>
            {t(name)}
          </span>
          <span className='absolute top-1/2 -translate-y-1/2 bg-transparent text-blue-600 left-20'>
            &#9668;
          </span>
        </div>
      )}
    </div>
  )
}

export default NavItem
