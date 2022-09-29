import { useRouter } from 'next/router'

export const useHeroSection = () => {
  const { locale } = useRouter()

  return { locale }
}
