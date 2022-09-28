import { featuresList } from 'CONSTANTS'

const FeatureSection = () => {
  return (
    <div className='bg-gray-50 py-12 sm:mt-[5%] 2xl:mt-[8%]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center flex flex-col gap-1'>
          <h2 className='text-lg font-semibold text-indigo-600'>
            ყველაფერი რაც გჭირდება
          </h2>
          <p className='mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
            განრიგის შედგენის საუკეთესო გზა
          </p>
        </div>

        <div className='mt-10 lg:mt-12'>
          <dl className='space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0'>
            {featuresList.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <div className='absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='ml-16 text-lg font-medium leading-6 text-gray-900'>
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
