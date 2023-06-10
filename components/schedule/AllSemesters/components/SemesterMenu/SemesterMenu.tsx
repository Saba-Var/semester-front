import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { ModalWrapper, DatepickerInputField } from 'components'
import { Menu, Transition } from '@headlessui/react'
import useSemesterMenu from './useSemesterMenu'
import { FormProvider } from 'react-hook-form'
import { SemesterMenuProps } from './types'
import { classNames } from 'utils'
import { Fragment } from 'react'

const SemesterMenu: React.FC<SemesterMenuProps> = ({ semester }) => {
  const {
    setShowEndSemesterModal,
    showEndSemesterModal,
    submitHandler,
    form,
    t,
  } = useSemesterMenu(semester?._id)

  return (
    <>
      <ModalWrapper
        closeHandler={() => setShowEndSemesterModal(false)}
        title={t('schedule:end_current_semester')}
        setOpen={setShowEndSemesterModal}
        submitText={t('end_semester')}
        submitHandler={submitHandler}
        open={showEndSemesterModal}
        type='danger'
      >
        <>
          <p className='text-left'>
            {t('schedule:do_you_really_want_to_end_current_semester')}:{' '}
            <b>{semester.name}</b>?
          </p>
          <p className='text-gray-400 text-left mt-1'>
            {t('schedule:end_semester_instructions')}
          </p>

          <FormProvider {...form}>
            <form className='mt-4' onSubmit={(e) => e.preventDefault()}>
              <DatepickerInputField name='endDate' />
            </form>
          </FormProvider>
        </>
      </ModalWrapper>

      <div className='flex items-center gap-6'>
        <Menu as='div' className='relative'>
          <Menu.Button className='-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500'>
            <EllipsisHorizontalIcon
              className='h-7 w-7 bg-slate-100 rounded-full'
              aria-hidden='true'
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute top-8 right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-50' : '',
                      'block p-3 py-2 text-sm leading-6 text-gray-900'
                    )}
                  >
                    Edit
                    <span className='sr-only'>, {semester.name}</span>
                  </a>
                )}
              </Menu.Item>
              {!semester.endDate && (
                <>
                  <hr />
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block p-3 py-2 text-sm leading-6 text-red-700'
                        )}
                        onClick={() => setShowEndSemesterModal(true)}
                      >
                        End
                        <span className='sr-only'>, {semester.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                </>
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  )
}

export default SemesterMenu
