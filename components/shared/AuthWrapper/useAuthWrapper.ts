import { useRouter } from 'next/router'

export const useAuthWrapper = () => {
  const router = useRouter()

  const navigateToHome = () => {
    router.push('/overview')
  }

  return { navigateToHome }
}
