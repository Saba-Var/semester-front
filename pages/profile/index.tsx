import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { UserAvatarSection, ProfileForm, LoadingIcon } from 'components'
import type { NextPageWithSidebarLayout } from 'types'
import type { GetStaticProps } from 'next'
import { useGetUserData } from 'hooks'
import { getLayout } from 'utils'

const Dashboard: NextPageWithSidebarLayout = () => {
  const { user } = useGetUserData()

  return (
    <div className='mt-10'>
      {user ? (
        <div className='bg-white p-14 mt-10 rounded-md shadow-md w-[60%] mx-auto'>
          <UserAvatarSection />
          <ProfileForm />
        </div>
      ) : (
        <LoadingIcon centered />
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
