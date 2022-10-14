import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useRequestExceedModal } from './useRequestExceedModal'
import { Dialog, Transition } from '@headlessui/react'
import { RequestExceedModalProps } from './types.d'
import { useTranslate } from 'hooks'
import { Fragment } from 'react'

const RequestExceedModal: React.FC<RequestExceedModalProps> = (props) => {
  const { setShowRequestExceedModal } = props

  const { cancelButtonRef } = useRequestExceedModal()

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog
        initialFocus={cancelButtonRef}
        className='relative z-10'
        onClose={() => {}}
        as='div'
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full  items-center justify-center p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                <div>
                  <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:h-10 sm:w-10'>
                    <ExclamationTriangleIcon
                      className='h-6 w-6 text-red-600'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900'
                    >
                      {useTranslate('auth:request-limit-exceed')}
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        {useTranslate('auth:request-limit-exceed-info')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:gap-3'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700   sm:w-auto sm:text-sm'
                    onClick={() => setShowRequestExceedModal(false)}
                  >
                    {useTranslate('common:close')}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default RequestExceedModal
