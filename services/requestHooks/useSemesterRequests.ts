import { useAxiosPrivate } from 'hooks'
import { AxiosResponse } from 'axios'
import { Semester } from 'types'

export const useSemesterRequests = () => {
  const axiosPrivate = useAxiosPrivate()

  const createSemesterRequest = async (data: { name: string }) => {
    return axiosPrivate.post('/semesters', data)
  }

  const getSemestersRequest = async (): Promise<AxiosResponse<Semester[]>> => {
    return axiosPrivate.get('/semesters')
  }

  const getSemesterDataRequest = async (id: string) => {
    return axiosPrivate.get(`/semesters/${id}`)
  }

  return {
    getSemesterDataRequest,
    createSemesterRequest,
    getSemestersRequest,
  }
}
