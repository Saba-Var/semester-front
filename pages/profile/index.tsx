import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithSidebarLayout } from 'types'
import { UserAvatarSection } from 'components'
import type { GetStaticProps } from 'next'
import { getLayout } from 'utils'

const Dashboard: NextPageWithSidebarLayout = () => {
  return (
    <div className='mt-10'>
      <UserAvatarSection />
    </div>
  )
}

Dashboard.getLayout = getLayout

export default Dashboard

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  }
}
