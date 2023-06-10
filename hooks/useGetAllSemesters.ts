import { useSemesterRequests } from 'services'
import { useQuery } from 'react-query'

export const useGetAllSemesters = () => {
  const { getSemestersRequest } = useSemesterRequests()

  const { data: semestersData, isLoading } = useQuery(
    'semesters',
    getSemestersRequest
  )

  return {
    semestersData: semestersData?.data,
    currentSemester: semestersData?.data?.find(
      (semester) => semester.isCurrentSemester
    ),
    isLoading,
  }
}
