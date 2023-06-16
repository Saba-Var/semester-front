import { useLearningActivityRequests } from 'services'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useRef } from 'react'

const useCalendar = () => {
  const containerOffset = useRef(null)
  const containerNav = useRef(null)
  const container = useRef(null)

  const { getAllLearningActivitiesBySemester } = useLearningActivityRequests()
  const { t } = useTranslation()
  const router = useRouter()

  const semesterId = router.query?.id as string

  const { data } = useQuery(
    ['learningActivities', semesterId],
    () => getAllLearningActivitiesBySemester(semesterId),
    {
      enabled: !!semesterId,
    }
  )

  return {
    learningActivitiesData: data?.data,
    containerOffset,
    containerNav,
    container,
    t,
  }
}

export default useCalendar
