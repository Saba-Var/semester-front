const NewsLetter = () => {
  return (
    <div>
      <footer className='bg-gray-50' aria-labelledby='footer-heading'>
        <div className='bg-gray-50 py-16 sm:py-24'>
          <div className='relative sm:py-16'>
            <div aria-hidden='true' className='hidden sm:block'>
              <div className='absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-white' />
              <svg
                className='absolute top-8 left-1/2 -ml-3'
                width={404}
                height={392}
                fill='none'
                viewBox='0 0 404 392'
              >
                <defs>
                  <pattern
                    id='8228f071-bcee-4ec8-905a-2a059a2cc4fb'
                    patternUnits='userSpaceOnUse'
                    height={20}
                    width={20}
                    x={0}
                    y={0}
                  >
                    <rect
                      className='text-gray-200'
                      fill='currentColor'
                      height={4}
                      width={4}
                      x={0}
                      y={0}
                    />
                  </pattern>
                </defs>
                <rect
                  fill='url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)'
                  height={392}
                  width={404}
                />
              </svg>
            </div>
            <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
              <div className='relative overflow-hidden rounded-2xl bg-indigo-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20'>
                <div
                  aria-hidden='true'
                  className='absolute inset-0 -mt-72 sm:-mt-32 md:mt-0'
                >
                  <svg
                    className='absolute inset-0 h-full w-full'
                    preserveAspectRatio='xMidYMid slice'
                    viewBox='0 0 1463 360'
                    fill='none'
                  >
                    <path
                      className='text-indigo-500 text-opacity-40'
                      fill='currentColor'
                      d='M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z'
                    />
                    <path
                      className='text-indigo-700 text-opacity-40'
                      fill='currentColor'
                      d='M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z'
                    />
                  </svg>
                </div>
                <div className='relative'>
                  <div className='sm:text-center'>
                    <h2 className='text-2xl font-bold tracking-tight text-white sm:text-4xl'>
                      გამოიწერე ელ-ფოსტა.
                    </h2>
                    <p className='mx-auto mt-6 max-w-2xl text-lg text-indigo-200'>
                      უნფორმაცია განახლებებისა და ახალი ფუნქციონალის შესახებ
                      გამოგეგზავნება ელ-ფოსტაზე
                    </p>
                  </div>
                  <form
                    action='#'
                    className='mt-12 sm:mx-auto sm:flex sm:max-w-lg'
                  >
                    <div className='min-w-0 flex-1'>
                      <label htmlFor='cta-email' className='sr-only'>
                        ელ-ფოსტის მისამართი
                      </label>
                      <input
                        className='block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600'
                        placeholder='შეიყვანე ელ-ფოსტა'
                        id='cta-email'
                        type='email'
                      />
                    </div>
                    <div className='mt-4 sm:mt-0 sm:ml-3'>
                      <button
                        type='submit'
                        className='block w-full rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10'
                      >
                        გამოწერა
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between'>
          <p className='mt-8 text-base text-gray-400 md:order-1 md:mt-0'>
            &copy; 2020 Semester. ყველა უფლება დაცულია.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
