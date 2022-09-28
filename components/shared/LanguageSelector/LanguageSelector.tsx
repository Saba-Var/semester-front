import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'
import { georgianFlag, britainFlag } from 'public'
import { Fragment, useState } from 'react'
import Image from 'next/image'

const languages = [
  {
    name: 'ქართული',
    image: georgianFlag,
  },
  {
    name: 'English',
    image: britainFlag,
  },
]

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const LanguageSelector = () => {
  const [selected, setSelected] = useState(languages[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className='relative'>
            <Listbox.Button className='relative w-40 cursor-pointer rounded-md border border-gray-100 bg-white py-2 pl-3 pr-10 text-left shadow-sm  sm:text-sm'>
              <span className='flex items-center'>
                <div className='relative h-6 w-6 flex-shrink-0 rounded-full'>
                  <Image
                    src={languages[0].image}
                    unoptimized={true}
                    alt='quote image'
                    priority={true}
                    layout='fill'
                  />
                </div>

                <span className='ml-3 block truncate'>{selected.name}</span>
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronDownIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {languages.map((language) => (
                  <Listbox.Option
                    key={language.name}
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
                              src={language.image}
                              unoptimized={true}
                              alt='quote image'
                              priority={true}
                              layout='fill'
                            />
                          </div>

                          <span className={'ml-3 block truncate'}>
                            {language.name}
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
