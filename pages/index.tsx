import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DashboardNavigation, WelcomeHeader } from 'components'
import { NextPageWithSidebarLayout } from 'types'
import type { GetStaticProps } from 'next'
import { getLayout } from 'utils'

const Dashboard: NextPageWithSidebarLayout = () => {
  return (
    <div className='pb-6'>
      <WelcomeHeader />
      <DashboardNavigation />
    </div>
  )
}

Dashboard.getLayout = getLayout

export default Dashboard

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'dashboard'])),
    },
  }
}
