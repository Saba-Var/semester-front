import { AddEventForm } from './components'

const ScheduleHeader = () => {
  return (
    <header className='flex flex-none items-center justify-between border-gray-200 pb-4'>
      <h2 className='text-lg font-semibold leading-6 text-gray-900'>
        <time dateTime='2022-01'>
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
          }).format(new Date())}
        </time>
      </h2>
      <div className='flex items-center'>
        <div className='relative flex items-center rounded-md bg-white shadow-sm md:items-stretch'>
          <div
            className='pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300'
            aria-hidden='true'
          />
        </div>

        <AddEventForm />
      </div>
    </header>
  )
}

export default ScheduleHeader
