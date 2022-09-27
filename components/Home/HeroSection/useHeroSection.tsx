import { useState, useEffect } from 'react'

export const useHeroSection = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return { mounted }
}
