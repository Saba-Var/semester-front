import { useSemesterRequests } from 'services'
import { useQuery } from 'react-query'

export const useSemesterData = (semesterId: string) => {
  const { getSemesterDataRequest } = useSemesterRequests()

  const { data } = useQuery(
    ['semesters', semesterId],
    () => getSemesterDataRequest(semesterId),
    {
      enabled: !!semesterId,
    }
  )

  return { semester: data?.data }
}
