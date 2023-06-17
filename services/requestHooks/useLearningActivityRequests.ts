import type { LearningActivityFormData, LearningActivity } from 'types'
import { useAxiosPrivate } from 'hooks'
import { AxiosResponse } from 'axios'

export const useLearningActivityRequests = () => {
  const axiosPrivate = useAxiosPrivate()

  const createLearningActivityRequest = async (
    data: LearningActivityFormData
  ) => {
    return axiosPrivate.post('/learning-activities', data)
  }

  const updateLearningActivityRequest = async (
    data: LearningActivityFormData,
    id: string
  ) => {
    return axiosPrivate.put(`/learning-activities/${id}`, data)
  }

  const getAllLearningActivitiesBySemester = async (
    id: string
  ): Promise<AxiosResponse<LearningActivity[]>> => {
    return axiosPrivate.get(`/learning-activities/semester/${id}`)
  }

  return {
    getAllLearningActivitiesBySemester,
    createLearningActivityRequest,
    updateLearningActivityRequest,
  }
}
