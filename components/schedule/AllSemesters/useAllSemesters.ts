import { useSemesterRequests } from 'services'
import { useQuery } from 'react-query'

const useAllSemesters = () => {
  const { getSemestersRequest } = useSemesterRequests()

  const { data: semestersData } = useQuery('semesters', getSemestersRequest)

  return {
    semestersData: semestersData?.data,
  }
}

export default useAllSemesters
