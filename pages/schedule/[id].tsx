import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Calendar, ScheduleHeader } from 'components'
import { NextPageWithSidebarLayout } from 'types'
import { GetStaticProps } from 'next'
import { getLayout } from 'utils'

const Schedule: NextPageWithSidebarLayout = () => {
  return (
    <>
      <ScheduleHeader />
      <Calendar />
    </>
  )
}

Schedule.getLayout = getLayout

export default Schedule

export const getServerSideProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'schedule',
        'common',
        'inputs',
      ])),
    },
  }
}
