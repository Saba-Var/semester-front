import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithSidebarLayout } from 'types'
import type { GetStaticProps } from 'next'
import { UserAvatar } from 'components'
import { getLayout } from 'utils'

const Dashboard: NextPageWithSidebarLayout = () => {
  return (
    <>
      <UserAvatar />
    </>
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
