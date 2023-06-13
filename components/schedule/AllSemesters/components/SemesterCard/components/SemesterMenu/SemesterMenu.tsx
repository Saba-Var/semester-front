import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { ModalWrapper, DatepickerInputField } from 'components'
import { Menu, Transition } from '@headlessui/react'
import { EditSemesterFormModal } from './components'
import useSemesterMenu from './useSemesterMenu'
import { FormProvider } from 'react-hook-form'
import { SemesterMenuProps } from './types'
import { classNames } from 'utils'
import { Fragment } from 'react'

const SemesterMenu: React.FC<SemesterMenuProps> = ({ semester }) => {
  const {
    setShowSemesterEditModal,
    setShowEndSemesterModal,
    showSemesterEditModal,
    showEndSemesterModal,
    isSemesterEnding,
    submitHandler,
    form,
    t,
  } = useSemesterMenu(semester?._id)

  return (
    <>
      <ModalWrapper
        closeHandler={() => {
          setShowEndSemesterModal(false)
          form.reset()
        }}
        title={t('schedule:end_current_semester')}
        setOpen={setShowEndSemesterModal}
        submitText={t('end_semester')}
        submitHandler={submitHandler}
        open={showEndSemesterModal}
        disabled={isSemesterEnding}
        type='danger'
      >
        <>
          <p className='text-left'>
            {t('schedule:do_you_really_want_to_end_current_semester')}:{' '}
            <b>{`"${semester?.name}"`}</b>?
            <span className='text-gray-400 inline-block text-left mt-1'>
              {t('schedule:end_semester_instructions')}
            </span>
          </p>

          <FormProvider {...form}>
            <form className='mt-4' onSubmit={(e) => e.preventDefault()}>
              <DatepickerInputField name='endDate' label={t('end_date')} />
            </form>
          </FormProvider>
        </>
      </ModalWrapper>

      <EditSemesterFormModal
        setShowSemesterEditModal={setShowSemesterEditModal}
        showSemesterEditModal={showSemesterEditModal}
        startDate={semester?.startDate}
        name={semester?.name}
        id={semester?._id}
      />

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
                  <div
                    className={classNames(
                      active ? 'bg-gray-50' : '',
                      'block p-3 py-2 text-sm cursor-pointer leading-6 text-gray-900'
                    )}
                    onClick={() => setShowSemesterEditModal(true)}
                  >
                    {t('edit')}
                    <span className='sr-only'>, {semester.name}</span>
                  </div>
                )}
              </Menu.Item>

              <hr />

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? 'bg-gray-50' : '',
                      'block p-3 py-2 text-sm cursor-pointer leading-6 text-red-700'
                    )}
                    onClick={() => setShowEndSemesterModal(true)}
                  >
                    {t('end')}
                    <span className='sr-only'>, {semester.name}</span>
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  )
}

export default SemesterMenu
