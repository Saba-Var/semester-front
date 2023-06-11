import useAllSemesters from './useAllSemesters'
import { AllSemestersProps } from './types'
import { SemesterCard } from './components'

const AllSemesters: React.FC<AllSemestersProps> = ({
  semestersData = [],
  currentSemester,
}) => {
  const { previousSemesters, t } = useAllSemesters(semestersData)

  return (
    <div className='pb-8 3xl:pb-0'>
      {currentSemester && (
        <div className='flex flex-col mt-6'>
          <h2 className='text-gray-900 text-xl font-medium'>
            {t('current_semester')}
          </h2>
          <ul className='grid mt-5 grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 3xl:grid-cols-3 xl:gap-x-8'>
            <SemesterCard semester={currentSemester} />
          </ul>
        </div>
      )}

      {previousSemesters?.length !== 0 && (
        <div className='border-t-2 border-gray-200 pt-10 mt-12'>
          <h2 className='text-gray-900 text-xl mb-5 font-medium'>
            {t('ended_semesters')}
          </h2>

          <ul
            className='grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 3xl:grid-cols-3 xl:gap-x-8'
            role='list'
          >
            {previousSemesters?.map((semester) => (
              <SemesterCard key={semester._id} semester={semester} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default AllSemesters
