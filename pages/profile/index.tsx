import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { UserAvatarSection, ProfileForm, LoadingIcon } from 'components'
import type { NextPageWithSidebarLayout } from 'types'
import type { GetStaticProps } from 'next'
import { useSelector } from 'react-redux'
import type { RootState } from 'store'
import { getLayout } from 'utils'

const Dashboard: NextPageWithSidebarLayout = () => {
  const userData = useSelector((state: RootState) => state.user)

  return (
    <div className='mt-10'>
      {userData._id ? (
        <div className='bg-white p-14 mt-10 rounded-md shadow-md w-[60%] mx-auto'>
          <UserAvatarSection />
          <ProfileForm />
        </div>
      ) : (
        <LoadingIcon centered={true} />
      )}
    </div>
  )
}

Dashboard.getLayout = getLayout

export default Dashboard

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'profile',
        'inputs',
      ])),
    },
  }
}
