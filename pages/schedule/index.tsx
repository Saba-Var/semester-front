import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { CreateSemesterForm, AllSemesters, LoadingIcon } from 'components'
import { NextPageWithSidebarLayout } from 'types'
import { useGetAllSemesters } from 'hooks'
import { GetStaticProps } from 'next'
import { getLayout } from 'utils'

const Schedule: NextPageWithSidebarLayout = () => {
  const { semestersData, currentSemester, isLoading } = useGetAllSemesters()

  return (
    <>
      {!isLoading ? (
        <>
          {!currentSemester && <CreateSemesterForm />}

          <AllSemesters
            currentSemester={currentSemester}
            semestersData={semestersData}
          />
        </>
      ) : (
        <LoadingIcon centered />
      )}
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
