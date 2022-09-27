import { useEffect, useState } from 'react'

export const useNewsLetter = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return { mounted }
}
