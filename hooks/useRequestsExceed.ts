import { useRouter } from 'next/router'

export const useRequestsExceed = () => {
  const { back: goBack } = useRouter()

  return { goBack }
}
