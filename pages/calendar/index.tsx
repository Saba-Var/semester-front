import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithSidebarLayout } from 'types'
import { GetStaticProps } from 'next'
import { getLayout } from 'utils'

const Calendar: NextPageWithSidebarLayout = () => {
  return <div>calendar</div>
}

Calendar.getLayout = getLayout

export default Calendar

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
