import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithSidebarLayout } from 'types'
import { Calendar } from 'components'
import { GetStaticProps } from 'next'
import { getLayout } from 'utils'

const Schedule: NextPageWithSidebarLayout = () => {
  return (
    <div className='w-full h-[82vh]'>
      <Calendar />
    </div>
  )
}

Schedule.getLayout = getLayout

export default Schedule

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'auth',
        'common',
        'overview',
        'inputs',
      ])),
    },
  }
}
