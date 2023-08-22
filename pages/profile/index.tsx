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
        <div className='bg-white p-4 pt-8 xl:px-10 rounded-md shadow-md w-full mx-auto mb-10 sm:w-10/12 sm:px-8 lg:w-8/12 2.5xl:w-1/2'>
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
        'auth',
      ])),
    },
  }
}
