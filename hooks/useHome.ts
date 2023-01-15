import { useState } from 'react'

export const useHome = () => {
  const [blurContent, setBlurContent] = useState(false)

  return { blurContent, setBlurContent }
}
