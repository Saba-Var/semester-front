import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Calendar, ScheduleHeader } from 'components'
import { NextPageWithSidebarLayout } from 'types'
import { GetStaticProps } from 'next'
import { useSemesterData } from 'hooks'
import { useRouter } from 'next/router'
import { getLayout } from 'utils'

const Schedule: NextPageWithSidebarLayout = () => {
  const { semester } = useSemesterData(useRouter().query?.id as string)

  return (
    <>
      {semester && (
        <>
          <ScheduleHeader
            isCurrentSemester={semester.isCurrentSemester}
            startDate={semester.startDate}
            endingDate={semester.endDate}
            semesterName={semester.name}
          />

          <Calendar
            learningActivitiesData={semester.learningActivities}
            isCurrentSemester={semester.isCurrentSemester}
          />
        </>
      )}
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
