import { useTranslation } from 'next-i18next'
import { TabsInPillsProps } from './types'
import { classNames } from 'utils'

const TabsInPills: React.FC<TabsInPillsProps> = ({
  translationLocation,
  setActiveTab,
  activeTab,
  tabs,
}) => {
  const { t } = useTranslation(translationLocation)

  return (
    <div>
      <div className='sm:hidden'>
        <label htmlFor='tabs' className='sr-only'>
          Select a tab
        </label>
        <select
          className='block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
          onChange={(e) => setActiveTab(e.target.value)}
          defaultValue={activeTab as unknown as string}
          name='tabs'
          id='tabs'
        >
          {tabs.map((tab) => (
            <option key={tab}>{t(`${translationLocation}:${tab}`)}</option>
          ))}
        </select>
      </div>
      <div className='hidden sm:block'>
        <nav className='flex overflow-x-auto pb-2' aria-label='Tabs'>
          {tabs.map((tab) => {
            return (
              <div
                onClick={() => setActiveTab(tab)}
                key={tab}
                className={classNames(
                  tab === (activeTab as unknown as string)
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700',
                  'rounded-md px-3 py-2 min-w-fit flex items-center justify-center text-sm font-medium cursor-pointer'
                )}
              >
                {t(`${translationLocation}:${tab}`)}
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default TabsInPills
