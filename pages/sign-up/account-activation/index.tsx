import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useAccountActivation } from 'hooks'
import { GetStaticProps } from 'next'

const AccountActivation = () => {
  const { activationFail, activationSuccess, alreadyActivated } =
    useAccountActivation()

  return (
    <div className='bg-gray-900 h-screen w-full'>
      {activationSuccess && <h1 className='text-5xl'>Account Activated</h1>}
      {activationFail && <h1 className='text-5xl'>activationFail</h1>}
      {alreadyActivated && <h1 className='text-5xl'>alreadyActivated</h1>}
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
