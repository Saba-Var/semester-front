import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { languagesList } from 'CONSTANTS'
import { classNames } from 'helpers'
import Image from 'next/image'

const LanguageSelector = () => {
  const [selected, setSelected] = useState(languagesList[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className='relative'>
            <Listbox.Button className='relative w-40 cursor-pointer rounded-md border border-gray-100 bg-white py-2 pl-3 pr-10 text-left shadow-sm  sm:text-sm'>
              <span className='flex items-center'>
                <div className='relative h-6 w-6 flex-shrink-0 rounded-full'>
                  <Image
                    src={languagesList[0].image}
                    alt='quote image'
                    priority={true}
                    layout='fill'
                  />
                </div>

                <span className='ml-3 block truncate'>{selected.lan}</span>
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronDownIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              as={Fragment}
              show={open}
            >
              <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {languagesList.map((language) => (
                  <Listbox.Option
                    key={language.lan}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-500' : 'text-gray-900',
                        'relative cursor-pointer select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={language}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className='flex items-center'>
                          <div className='relative h-6 w-6 flex-shrink-0 rounded-full'>
                            <Image
                              className='rounded-full'
                              alt={`${language.lan} flag`}
                              src={language.image}
                              priority={true}
                              layout='fill'
                            />
                          </div>

                          <span className={'ml-3 block truncate'}>
                            {language.lan}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon
                              className='h-5 w-5 fill-green-500'
                              aria-hidden='true'
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default LanguageSelector
