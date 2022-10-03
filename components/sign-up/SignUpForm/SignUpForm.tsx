import { useTranslate } from 'hooks'

const SignUpForm = () => {
  return (
    <form className='space-y-5'>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          {useTranslate('auth:username')}
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

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          {useTranslate('auth:confirm-password')}
        </label>
        <div className='mt-1'>
          <input
            className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
            type='password'
          />
        </div>
      </div>

      <button
        className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        type='submit'
      >
        {useTranslate('auth:sign-up')}
      </button>
    </form>
  )
}

export default SignUpForm
