import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithSidebarLayout } from 'types'
import { CreateSemesterForm } from 'components'
import { GetStaticProps } from 'next'
import { getLayout } from 'utils'

const Schedule: NextPageWithSidebarLayout = () => {
  return (
    <>
      <h2 className='text-xl font-semibold leading-6 mb-10 text-gray-900'>
        Semesters
      </h2>

      <CreateSemesterForm />
    </>
  )
}

Schedule.getLayout = getLayout

export default Schedule

export const getStaticProps: GetStaticProps = async ({ locale }) => {
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
