import { useHeroSection } from './useHeroSection'
import { HeroSectionProps } from './types.d'
import { Header } from 'components'
import { calendar } from 'public'
import Image from 'next/image'

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  const { blurContent, setBlurContent } = props

  const { mounted } = useHeroSection()

  return (
    <div className='relative bg-gray-50'>
      <Header setBlurContent={setBlurContent} />

      <main
        onClick={() => blurContent && setBlurContent(false)}
        className={`lg:relative h-screen mt-[80px] lg:mt-0 ${
          blurContent ? 'blur-[2.4px]' : 'blur-0'
        } md:blur-0`}
      >
        <div className='mx-auto w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 sm:px-8 lg:w-1/2 xl:pr-16 lg:pt-[3%]'>
            <h2 className='text-4xl lg:mt-14 mb-7 font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span>დაგეგმე</span>{' '}
              <span className='text-indigo-600 xl:inline'>სემესტრი</span>
            </h2>
            <p className='mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              Semester-ის საშუალებით შენ შეგიძლია ერთ სივრცეში დაგეგმო
              საუნევერსიტეტო სასწავლო განრიგი.
            </p>
            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
              <button className='flex mx-auto lg:mx-0 w-3/4 sm:w-3/5 items-center shadow-sm justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'>
                დაწყება
              </button>
            </div>
          </div>
        </div>

        <div className='relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2'>
          <div className='absolute inset-0 h-full w-full object-cover'>
            {mounted && (
              <Image
                className='object-cover w-full h-full'
                unoptimized={true}
                alt='quote image'
                priority={true}
                src={calendar}
                layout='fill'
              />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroSection
