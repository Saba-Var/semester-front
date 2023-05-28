import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useAccountActivation } from 'hooks'
import { GetStaticProps, NextPage } from 'next'
import {
  ActivationButton,
  LottieAnimation,
  ActivationText,
  LoadingIcon,
} from 'components'

const AccountActivation: NextPage = () => {
  const {
    activationSuccess,
    alreadyActivated,
    accountNotFound,
    activationFail,
    isMounted,
    isLoading,
    imageSrc,
  } = useAccountActivation()

  return (
    <div className='h-screen bg-white w-full flex justify-center'>
      {isMounted && !isLoading && imageSrc ? (
        <div className='flex items-center justify-center flex-col gap-5'>
          <div className='relative h-[50vh] w-full'>
            <LottieAnimation
              disableLoop={accountNotFound ? true : false}
              animationData={imageSrc}
            />
          </div>

          <ActivationText
            activationSuccess={activationSuccess}
            alreadyActivated={alreadyActivated}
            accountNotFound={accountNotFound}
          />

          <ActivationButton
            activationSuccess={activationSuccess}
            accountNotFound={accountNotFound}
            activationFail={activationFail}
          />
        </div>
      ) : (
        <LoadingIcon centered={true} />
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
