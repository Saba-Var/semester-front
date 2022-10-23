import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { carOnFire, party, girlWithLaptop, searching } from 'public'
import { LoadingIcon, ActivationText } from 'components'
import { useAccountActivation } from 'hooks'
import { GetStaticProps } from 'next'
import Image from 'next/image'

const AccountActivation = () => {
  const {
    activationSuccess,
    alreadyActivated,
    accountNotFound,
    isMounted,
    isLoading,
  } = useAccountActivation()

  return (
    <div className='bg-gray-200 h-screen w-full flex justify-center'>
      {isLoading && <LoadingIcon centered={true} />}

      {isMounted && !isLoading && (
        <div className='flex items-center justify-center flex-col gap-5'>
          <div className='relative h-[180px] w-[280px] md:h-[300px] md:w-[450px] lg:h-[400px] lg:w-[550px] 3xl:h-[600px] 3xl:w-[700px]'>
            <Image
              src={
                activationSuccess
                  ? party
                  : alreadyActivated
                  ? girlWithLaptop
                  : accountNotFound
                  ? searching
                  : carOnFire
              }
              alt='illustration'
              priority={true}
              layout='fill'
            />
          </div>

          <ActivationText
            activationSuccess={activationSuccess}
            alreadyActivated={alreadyActivated}
            accountNotFound={accountNotFound}
          />
        </div>
      )}
    </div>
  )
}

export default AccountActivation

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['auth'])),
    },
  }
}
