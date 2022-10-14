import { useRef } from 'react'

export const useRequestExceedModal = () => {
  const cancelButtonRef = useRef(null)

  return { cancelButtonRef }
}
