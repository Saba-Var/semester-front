import type { LearningActivityFormData } from 'types'
import { useAxiosPrivate } from 'hooks'

export const useLearningActivityRequests = () => {
  const axiosPrivate = useAxiosPrivate()

  const createLearningActivityRequest = async (
    data: LearningActivityFormData
  ) => {
    return axiosPrivate.post('/learning-activities', data)
  }

  return { createLearningActivityRequest }
}
