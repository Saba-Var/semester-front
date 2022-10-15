import { useRouter } from 'next/router'

const useRequestsExceed = () => {
  const { back: goBack } = useRouter()

  return { goBack }
}

export default useRequestsExceed
