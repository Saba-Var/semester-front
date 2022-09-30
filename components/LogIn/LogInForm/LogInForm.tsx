import { useTranslate } from 'hooks'

const LogInForm = () => {
  return (
    <form className='space-y-6'>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          {useTranslate('auth:email-address')}
        </label>
        <div className='mt-1'>
          <input
            className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
            name='email'
            type='email'
          />
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          {useTranslate('auth:password')}
        </label>
        <div className='mt-1'>
          <input
            className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
            type='password'
          />
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <label className='text-sm text-gray-900 flex gap-2 items-center cursor-pointer'>
          <input
            className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-transparent'
            name='remember-me'
            type='checkbox'
          />
          <span className='select-none'>
            {useTranslate('auth:remember-me')}
          </span>
        </label>

        <div className='text-sm'>
          <a className='font-medium cursor-pointer text-indigo-600 hover:text-indigo-500'>
            {useTranslate('auth:forget-password')}
          </a>
        </div>
      </div>

      <div>
        <button
          className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          type='submit'
        >
          {useTranslate('auth:log-in')}
        </button>
      </div>
    </form>
  )
}

export default LogInForm
