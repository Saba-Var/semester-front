import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DashboardNavigation, WelcomeHeader } from 'components'
import { NextPageWithSidebarLayout } from 'types'
import { useTranslation } from 'next-i18next'
import type { GetStaticProps } from 'next'
import { getLayout } from 'utils'

const Dashboard: NextPageWithSidebarLayout = () => {
  const { t } = useTranslation()

  return (
    <>
      <WelcomeHeader />
      <DashboardNavigation />
    </>
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
