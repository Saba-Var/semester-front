import { XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import useSlideOver from './useSlideOver'
import { SlideOverProps } from './types'
import { Fragment } from 'react'

const SlideOver: React.FC<SlideOverProps> = ({
  submitHandler = () => {},
  showSubmitButton = true,
  onClose = () => {},
  disabled = false,
  openLeft,
  children,
  setOpen,
  title,
  open,
}) => {
  const { isDesktopSideBarOpen, t } = useSlideOver()

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => {
          setOpen(false)
          onClose()
        }}
      >
        <div />

        <div className='overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div
              className={`pointer-events-none fixed inset-y-0 right-0 flex max-w-full ${
                openLeft ? `left-20 ${isDesktopSideBarOpen && 'left-60'}` : ''
              }`}
            >
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col z-50 divide-y divide-gray-200 bg-white shadow-xl'>
                    <div className='h-0 flex-1 overflow-y-auto'>
                      <div className='bg-indigo-700 px-4 py-6 sm:px-6'>
                        <div className='flex items-center justify-between'>
                          <Dialog.Title className='text-base font-semibold leading-6 text-white'>
                            {title}
                          </Dialog.Title>
                          <div className='ml-3 flex h-7 items-center'>
                            <button
                              type='button'
                              className='rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none'
                              onClick={() => {
                                setOpen(false)
                                onClose()
                              }}
                            >
                              <span className='sr-only'>Close panel</span>
                              <XMarkIcon
                                className='h-6 w-6'
                                aria-hidden='true'
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className='py-6 px-4 sm:px-6'>{children}</div>
                    </div>

                    <div className='flex flex-shrink-0 justify-end px-4 py-4'>
                      <button
                        className='rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                        onClick={() => {
                          setOpen(false)
                          onClose()
                        }}
                        type='button'
                      >
                        {showSubmitButton ? t('cancel') : t('close')}
                      </button>

                      {showSubmitButton && (
                        <button
                          className={`ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                            disabled ? 'disabled-btn' : ''
                          }`}
                          onClick={submitHandler}
                          disabled={disabled}
                          type='submit'
                        >
                          {t('save')}
                        </button>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SlideOver
