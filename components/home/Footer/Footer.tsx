import { useTranslate } from 'hooks'

const Footer = () => {
  return (
    <div className='mx-auto border-gray-200 border-t max-w-7x pb-10 lg:pb-7 flex justify-center px-4 sm:px-6 lg:px-8'>
      <div className='flex justify-center pt-8 md:flex md:items-center md:justify-between'>
        <p className='mt-8 lg:py-4 text-base text-center text-gray-400 md:order-1 md:mt-0'>
          &copy; {new Date().getFullYear()} Semester.{' '}
          {useTranslate('common:rights')}.
        </p>
      </div>
    </div>
  )
}

export default Footer
