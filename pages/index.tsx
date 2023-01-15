import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithSidebarLayout } from 'types'
import type { GetStaticProps } from 'next'
import { getLayout } from 'utils'
import { useTranslation } from 'next-i18next'

const Dashboard: NextPageWithSidebarLayout = () => {
  const { t } = useTranslation()

  return <>{t('profile')}</>
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
