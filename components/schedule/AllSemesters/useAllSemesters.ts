import { useTranslation } from 'next-i18next'
import type { Semester } from 'types'

const useAllSemesters = (semestersData: Semester[]) => {
  const { t } = useTranslation('schedule')

  const previousSemesters = semestersData?.filter(
    (semester) => !semester.isCurrentSemester
  )

  return { previousSemesters, t }
}

export default useAllSemesters
